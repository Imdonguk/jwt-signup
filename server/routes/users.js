var express = require('express');
var router = express.Router();
var user = require('../model/userSchema.js')
/* GET users listing. */
router.get('/', async (req, res, next) => {
  const accountsInfo = await user.find()
  res.json(accountsInfo);
});

module.exports = router;
