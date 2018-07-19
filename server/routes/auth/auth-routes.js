


const authController = require('../../controllers/authcontroller.js');
const path = require('path');
const isLoggedIn = require('../../middlewares/auth.js')

module.exports = function (app, passport) {

    app.get('/auth/user', (req, res, next) => {
        console.log('Get Current User Info')
        console.log(req.user)
        if (req.user) {
            return res.json({ user: req.user })
        } else {
            return res.json({ user: null })
        }
    });

    app.get('/auth/signup', authController.signup);

    app.post('/auth/signup', passport.authenticate('local-signup', {
        // successRedirect: '/dashboard',
        // failureRedirect: '/signup',
        failureFlash: true
    }), (req, res) => {
        res.render('/signup', {
            message: req.flash('signUpMessage'),
        });
    });

    app.get('/auth/signin', authController.signin);

    app.post('/auth/signin', passport.authenticate('local-signin', {
        // successRedirect: '/dashboard',
        // failureRedirect: '/signin',
        failureFlash: true
    }),(req, res) => {
        res.render('signin', {
            message: req.flash('signInMessage'),
        });
    });

    app.get('/dashboard', isLoggedIn, authController.userloggedin);
    
    app.get('/auth/logout', authController.logout);

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/login'
        })
    )

};


