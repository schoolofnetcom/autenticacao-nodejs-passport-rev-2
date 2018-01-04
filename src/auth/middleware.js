module.exports = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    return res.redirect('/auth')
}