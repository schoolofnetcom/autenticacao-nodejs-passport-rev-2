module.exports = (app, passport) => {
    app.use('/', require('./controller/main/index'))
    app.use('/users', require('./controller/users/index')(passport))
    app.use('/auth', require('./controller/auth/index')(passport))
}