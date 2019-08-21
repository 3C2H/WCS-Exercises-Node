const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

const app = express()
const pug = require('pug')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// ask for age & return DOB
process.stdin.resume()
process.stdin.setEncoding('utf8')

const anneeCourante = 2018
let age = 0

console.log('What\'s your age ? ')

process.stdin.on('data', (age) => {
  if (isNaN(age)) {
    console.log('Value must be a number, learn to read N@@b')
    process.exit()	
  } else if (age > 99 || age <= 0) {
    console.log("this test doesn't apply to mummies or unborns :o")
    process.exit()
  } else {
    let	DoB = (anneeCourante - age)
    DoB = Math.round(DoB)
    console.log("ah so you're born in " + DoB)
  }
  // process.exit();
})

// ------------------------
// PUG
// ------------------------

// Compile pug source code
pug.compileFile('./views/layout.pug')

app.get('/', function (req, res) {
  res.render('completeLayout.html')
})

// // Render a set of data
// console.log(compiledFunction({
//   title: 'titletest'
// }))
// "<p>Timothy's Pug source code!</p>"

module.exports = app
