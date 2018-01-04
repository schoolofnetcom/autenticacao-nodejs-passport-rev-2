const express = require('express')
const router = express.Router()
const isAuth = require('./../../auth/middleware')

// router.get('/', isAuth,  require('./main'))
router.get('/', require('./main'))

module.exports = router