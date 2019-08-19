var express = require('express');
var router = express.Router();

const userName = 'unregistered_user'
const userId = 0 
// userId = [] ??

const userUpdate = require('../views/update-user.pug');
const userDelete = require('../views/delete-user.pug');

// Get user form by userName
router.get(`/users/${userName}`, function(req, res, next) {
  res.render('userform', `${userUpdate}`);
  // res.send(`${userUpdate}`)
  // res.send('../views/update-user.pug');
});

// Get user delete form
router.get(`/users/${userName}`, function(req, res, next) {
  res.render('userform', `${userDelete}`);
});

// modify user by id
router.put('/users/([A-Z])\w+', function(req, res, next) {
  res.send(`The new name is ${userId}`);
});

// delete user by id
router.delete('/users/([0-9])\W+', function(req, res, next) {
  res.send(`${userDelete}`)
  // res.send(`no more user with id ${prenom}`);
});

module.exports = router;

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