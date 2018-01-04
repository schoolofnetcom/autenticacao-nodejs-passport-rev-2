module.exports = (req, res) => {
    // return res.json({ msg: 'Hello from Express.js + Passport '})
    return res.render('main/index', {
        user: req.user || null
    })
}