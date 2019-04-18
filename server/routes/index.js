const express = require('express');
const router = express.Router();
const accountRouter = require('./account');
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/account', accountRouter)

module.exports = router;