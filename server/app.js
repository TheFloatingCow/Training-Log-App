const path = require("path");
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

app.get('/activities', (req, res) => {
  res.sendFile(path.join(__dirname, "users.json"));
})

let activity = 1;
app.get('/activity/' + activity, (req, res) => {
  res.sendFile(path.join(__dirname, "users.json"));
})

app.post('/activity', (req, res) => {
  res.send('POST request to activity')
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.put('/activity', (req, res) => {
  res.
})

app.delete('/activity', (res, req) => {
  res.
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})