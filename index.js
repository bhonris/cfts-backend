const data = require("./data.js")

const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var cors = require('cors')
app.use(cors())
app.get("/everyone", (req, res) => {
  res.json(data)
})

app.get("/getOldestPerson", (req, res) => {
  const oldestPerson = data.reduce((a,b) => a.age > b.age ? a: b)
  res.json(oldestPerson)
})

app.get("/getCombinedAge", (req, res) => {
  const oldestPerson = data.reduce((a, b) => a + b.age, 0)
  res.json(oldestPerson)
})


// local host:3003
app.listen(3003, () => {
  console.log("Server is up and listening on 3003")
})

module.exports = app; // for testing
