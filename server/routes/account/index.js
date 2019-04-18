const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/', (req, res) => {
    res.send({ 'account': 'welcome' })
})


function encode(pwd, salt) {
    return crypto.scryptSync(pwd, salt, 64, { N: 1024 }).toString('hex');
}

module.exports = router;