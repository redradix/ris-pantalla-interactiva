const express = require('express')
const path = require('path')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.json())

const port = 3003

let socketInstance
let activeApp

app.use('/', express.static(path.join(`${__dirname}/views/welcome`)))
app.use('/dashboard', express.static(path.join(`${__dirname}/views/dashboard`)))
app.use(
  '/semaphore',
  express.static(path.join(`${__dirname}/views/apps/semaphore`)),
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

app.post('/message', (req, res) => {
  if (socketInstance) {
    socketInstance.emit(req.body.event, req.body.message)
  }
  res.end()
})

app.post('/update-app', (req, res) => {
  activeApp = activeApp ? null : req.body.app
  socketInstance.emit('reload', activeApp || '/')
  res.end()
})

io.of('/admin').on('connection', function (socket) {
  socketInstance = socket

  //TODO: add on disconnect
})

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
