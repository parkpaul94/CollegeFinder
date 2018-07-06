module.exports = function isLoggedIn(req, res, next) {
    if ((req.isAuthenticated()) || (process.env.BYPASS))
        return next();
    res.redirect('/signin');
};