const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

``

app.get('/tin-tuc', (req, res) => {
    res.send('Hello World');
})
app.get('/question', (req, res) => {
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})