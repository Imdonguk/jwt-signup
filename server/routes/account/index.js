const express = require('express');
const router = express.Router();
const User = require('../../model/userSchema');
const crypto = require('crypto');

router.get('/', (req, res) => {
    res.send({ 'account': 'welcome' })
})

router.post('/signup', (req, res) => {
    const { name, userName, password: pwd } = req.body;
    if (!name) return res.send({ success: false, msg: '이름이 없습니다.' })
    if (!userName) return res.send({ success: false, msg: '사용자이름이 없습니다.' })
    if (!pwd) return res.send({ success: false, msg: '비밀번호가 없습니다.' })

    User.findOne({ userName })
        .then(r => {
            if (r) throw new Error('기존에 있는 사용자이름입니다.');
            return new User({ name, userName, pwd }).save()
        })
        .then(r => User.updateOne({ _id: r._id }, { $set: { pwd: encode(r.pwd, r._id.toString()) } }))
        .then(() => { res.send({ success: true }) })
        .catch(e => { res.send({ success: false, msg: e.message }) })
})

function encode(pwd, salt) {
    return crypto.scryptSync(pwd, salt, 64, { N: 1024 }).toString('hex');
}

module.exports = router;