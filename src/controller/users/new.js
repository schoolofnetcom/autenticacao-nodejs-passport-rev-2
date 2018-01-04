const User = require('./../../model/user')

module.exports = (req, res) => {
    return res.render('users/new', {
        user: new User()
    })
}