const express = require('express')
const path = require('path')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.json())

const port = 3003

app.use('/', express.static(path.join(`${__dirname}/views/welcome`)))
app.use('/dashboard', express.static(path.join(`${__dirname}/views/dashboard`)))
app.use(
  '/semaphore',
  express.static(path.join(`${__dirname}/views/apps/semaphore`)),
)
app.use(
  '/pomodoro',
  express.static(path.join(`${__dirname}/views/apps/pomodoro`)),
)
app.use(
  '/calendar',
  express.static(path.join(`${__dirname}/views/apps/calendar`)),
)

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}${route}/index.html`))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/dashboard/index.html`))
})

app.get('/semaphore', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/apps/semaphore/index.html`))
})

app.get('/pomodoro', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/apps/pomodoro/index.html`))
})

app.get('/calendar', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/apps/calendar/index.html`))
})

io.on('connection', function (socket) {
  socket.join('ferm|n')

  socket.on('message', ({ event }) => {
    io.to('ferm|n').emit(event)
  })

  socket.on('change-app', ({ app }) => {
    io.to('ferm|n').emit('update', `/${app ?? ''}`)
  })

  socket.on('semaphore-updated', isBusy => {
    io.to('ferm|n').emit('semaphore-updated', isBusy)
  })

  //TODO: add on disconnect
})

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
