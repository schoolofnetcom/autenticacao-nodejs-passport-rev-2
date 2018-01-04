const express = require('express')
const router = express.Router()
const isAuth = require('./../../auth/middleware')

module.exports = (passport) => {

    router.get('/', isAuth, require('./all'))
    router.post('/', isAuth, passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/users'
    }))
    // router.post('/', require('./create'))
    router.get('/new', isAuth, require('./new'))
    router.delete('/:id', isAuth, require('./remove'))

    return router
}