var express = require('express')
var router = express.Router()

const userName = 'unregistered_user'
const userId = 0
// userId = [] ??

// const userUpdate = require('/home/wilder/Exercices_Coding/WCS-Exercises-Node/views/register_form.pug')
// const userDelete = require('../views/delete_form.pug')

const layout = require('/home/wilder/Exercices_Coding/WCS-Exercises-Node/views/layout.pug')

// Get user form by userName
router.get(`/users/${userName}`, function (req, res, next) {
  res.render('userform', `${layout}`)
  // res.send(`${userUpdate}`)
  // res.send('../views/update-user.pug');
})

// Get user delete form
router.get(`/users/${userName}`, function (req, res, next) {
  res.render('userform', `${layout}`)
})

// modify user by id
router.put('/users/([A-Z])w+', function (req, res, next) {
  res.send(`The new name is ${userId}`)
})

// delete user by id
router.delete('/users/([0-9])W+', function (req, res, next) {
  res.send(`${layout}`)
  // res.send(`no more user with id ${prenom}`);
})

module.exports = router

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// // LEVEL 1 EX
// router.get('/forms-:numeroForm(\\d+)', (req, res) => res.end() );

// router.post('/forms-:numeroForm(\\d+)', (req, res) => {
//    res.send(req.body.userName)
//    console.log(req.params.numeroForm)
//    console.log(req.query.level)
//    console.log(req.body.userName)
// });
