const express = require('express')
const appRouter = express.Router()
const userName = 'unregistered_user'

// Get update-user form
appRouter.get(`/users/${userName}?`, function (req, res, next) {
  res.render('update-user')
})

// Get delete-user form
appRouter.get(`/users/${userName}?`, function (req, res, next) {
  res.render('delete-user')
})
// TODO: diferentiate the 2 pug files

// modify user
appRouter.put('/users/([A-Z])w+', function (req, res, next) {
  req.body(`The new name is ${userName}`)
})

// delete user
appRouter.delete('/users/([0-9])W+', function (req, res, next) {
  req.body(userName)
})

// // Concise version
// appRouter.route('/users')
//   .get(function (req, res) {
//     req.send('update-user')
//   })
//   .get(function (req, res) {
//     req.send('delete-user')
//   })
//   .put(function (req, res) {
//     req.body(`The new name is ${userId}`)
//   })
//   .delete(function (req, res) {
//     res.delete(userName)
//   })

module.exports = appRouter

// // LEVEL 1 EX
// appRouter.get('/forms-:numeroForm(\\d+)', (req, res) => res.end() );

// appRouter.post('/forms-:numeroForm(\\d+)', (req, res) => {
//    res.send(req.body.userName)
//    console.log(req.params.numeroForm)
//    console.log(req.query.level)
//    console.log(req.body.userName)
// });
