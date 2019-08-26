const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('connect on 3000')
})

// pug render
app.get('/', function (req, res) {
  res.render('index')
})

// app.get('/users', function (req, res) {
//   res.sendFile('index.html', { root: views })
// })

// app.get('/users', function (req, res) {
//   res.render('index.html')
// })
// app.get('/', function (req, res) {
//   res.redirect('/users')
// })

module.exports = app
