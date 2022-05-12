const express = require('express')
const ind = require('./index.js')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send(ind)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
