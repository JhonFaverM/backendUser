const express = require('express'),
router =  express.Router(),
userctrl = require('../controllers/user.controller')

router.post('/', userctrl.create)

module.exports = router