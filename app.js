const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const methodOverride = require('method-override')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const pug = require('pug')
const app = express()
const engines = require('consolidate')

// view engine setup
app.set('html', path.join(__dirname, 'views', 'html'))
app.set('view engine', 'pug')
app.set('view engine', 'html')
app.engine('html', engines.pug)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use(methodOverride('_method'))

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

// -----------PUG-----------

// // Compile pug source code
// pug.compileFile('./views/index.pug')

module.exports = app
