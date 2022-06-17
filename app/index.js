const express = require('express')
const http = require('http')
const socket = require('socket.io')
const path = require('path')

const app = express()
const server = http.Server(app)
const io = socket(server)

const PORT = 3003

app.use(express.json())

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

app.get('/:appName', (req, res) => {
  res.sendFile(
    path.join(`${__dirname}/views/apps/${req.params.appName}/index.html`),
  )
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
})

server.listen(PORT, () => {
  console.log(`ferm|n listening on port ${PORT}`)
})
