var exports = module.exports = {};
 
exports.signup = function(req, res) {
    console.log('signup called')
};

exports.signin = function(req, res) {
    const userInfo = {
        id: req.user.id,
        username: req.user.email,
        firstname: req.user.firstname.toUpperCase(),
        lastname: req.user.lastname.toUpperCase()
    };    
    res.json(userInfo);
};


exports.userloggedin = function(req, res) {
    const userInfo = {
        id: req.user.id,
        username: req.user.email,
        firstname: req.user.firstname.toUpperCase(),
        lastname: req.user.lastname.toUpperCase()
    };    
    res.json(userInfo);
};

exports.dashboard = function(req, res) {
    const userInfo = {
        id: req.user.id,
        username: req.user.email,
        firstname: req.user.firstname.toUpperCase(),
        lastname: req.user.lastname.toUpperCase()
    };    
    res.json(userInfo);
};

exports.logout = function(req,res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    })
};

