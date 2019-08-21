const express = require('express')
// const bodyParser = require('body-parser')

const router = express()

// router.use(bodyParser.urlencoded({ extended: true }))

router.listen(3000, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log('connect on 3000')
  // res.render('index', { title: 'Express' });
})

module.exports = router

// // GET home page.
// router.get('/', function(req, res) {
//    res.redirect('/catalog');
//  });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
