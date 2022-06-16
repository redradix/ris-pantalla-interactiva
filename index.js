const express = require('express')
const path = require('path')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const dynamicStatic = require('express-dynamic-static')()

app.use(express.json())
app.use(dynamicStatic)

const port = 3003

let socketInstance
let activeApp

app.use('/dashboard', express.static(path.join(`${__dirname}/views/dashboard`)))

app.use('/', (req, res, next) => {
  // TODO: refactor
  if (activeApp) {
    dynamicStatic.setPath(path.join(`${__dirname}/views/apps/semaphore`))
  } else {
    dynamicStatic.setPath(path.join(`${__dirname}/views/welcome`))
  }

  next()
})

app.get('/', (req, res) => {
  const route = activeApp ? `/views/apps/${activeApp}` : '/views/welcome'

  res.sendFile(path.join(`${__dirname}${route}/index.html`))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/dashboard/index.html`))
})

app.post('/message', (req, res) => {
  if (socketInstance) {
    socketInstance.emit(req.body.event, req.body.message)
  }
  res.end()
})

app.post('/update-app', (req, res) => {
  activeApp = activeApp ? null : req.body.app
  socketInstance.emit('reload')
  res.end()
})

io.of('/admin').on('connection', function (socket) {
  socketInstance = socket

  //TODO: add on disconnect
})

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
