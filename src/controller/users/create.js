const User = require('./../../model/user')

module.exports = (req, res) => {
    let user = new User(req.body)

    user.password = user.genHash(user.password)

    user
        .save()
        .then((user) => {
            return res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
            return
        })
}