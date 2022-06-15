const express = require('express')
const path = require('path')

const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/semaphore/index.html`))
})

app.get('/styles.css', (req, res) => {
  res.sendFile(path.join(`${__dirname}/views/semaphore/styles.css`))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
