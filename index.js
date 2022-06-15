const express = require('express')
const path = require('path')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.json())

const port = 3003

let socketInstance

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/apps/semaphore/index.html`))
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/dashboard/index.html`))
})

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/apps/semaphore/styles.css`))
})

app.post('/message', (req, res) => {
  if (socketInstance) {
    socketInstance.emit(req.body.event, req.body.message)
  }
  res.end()
})

io.of('/admin').on('connection', function (socket) {
  socketInstance = socket
})

http.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
