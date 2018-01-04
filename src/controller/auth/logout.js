module.exports = (req, res) => {
    req.logout()

    return res.redirect('/auth')
}