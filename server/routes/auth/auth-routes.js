const authController = require('../../controllers/authcontroller.js');
const path = require('path');
const isLoggedIn = require('../../middlewares/auth.js')

module.exports = function (app, passport) {

    app.get('/', (req, res, next) => {
        console.log('app.get called');
        res.send('Express REST API');
    });

    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup',
        failureFlash: true
    }), (req, res) => {
        res.render('/signup', {
            message: req.flash('signUpMessage'),
        });
    });

    app.get('/dashboard', isLoggedIn, authController.userloggedin);
    
    app.get('/logout', authController.logout);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin',
        failureFlash: true
    }),(req, res) => {
        res.render('signin', {
            message: req.flash('signInMessage'),
        });
    });
};


