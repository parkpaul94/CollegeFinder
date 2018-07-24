var exports = module.exports = {};
 
exports.signup = function(req, res) {
    res.send({
        message: 'signup API GET called'
    });
};

exports.signin = function(req, res) {
    res.send({
        message: 'signin API GET called'
    });
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

exports.logout = function(req,res) {
	if (req.user) {
		req.session.destroy();
		res.clearCookie('connect.sid');
		return res.json({ msg: 'logging you out' });
	} else {
		return res.json({ msg: 'no user to log out!' });
	}
};

