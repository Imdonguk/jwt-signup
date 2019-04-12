var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', (req, res) => {
  console.log(req.body);
  res.json({ success: 'ok' })
})
module.exports = router;
