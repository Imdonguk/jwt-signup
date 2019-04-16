const express = require('express');
const router = express.Router();
const User = require('../model/userSchema.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', (req, res) => {
  const { name, userName, password } = req.body;
  if (!name) return res.send({ success: false, msg: '이름이 없습니다.' })
  if (!userName) return res.send({ success: false, msg: '사용자 이름이 없습니다.' })
  if (!password) return res.send({ success: false, msg: '비밀번호가 없습니다.' })

  User.findOne({ userName })
    .then(r => {
      if (r) throw new Error('기존에 있는 사용자이름입니다.')
      User.create({
        name,
        userName,
        password
      })
      res.send({ success: true })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
})
})
module.exports = router;
