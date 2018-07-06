//load bcrypt
const bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
    // const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    //Serialize Sessions User
    passport.serializeUser(function (user, done) {
        // console.log('Serialize user called.');
        done(null, user.id);
    });

    //Deserialize Session User 
    passport.deserializeUser(function (id, done) {
        // console.log('Deserialize user called.');
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    //---------------------------Local SignUp Strategy-------------------------------------
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true, // allows us to pass back the entire request to the callback
            // session: false,
        },
        (req, email, password, done) => {

            console.log('\n local strategy called with: %s', typeof(email), ' : ',email, typeof(password), ' : ',password, '\n');

            const generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    'email': email
                }
            }).then((user) => {
                // if(err) return done(err);
                if(user) {
                    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~',user.email);
                    return done(null, false, req.flash('signUpMessage', 'That email is already taken by others, please choose a different one'));
                } else {
                    const userPassword = generateHash(password);
                    const data =
                        {
                            email: email,
                            pass: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            lastlogin_time: new Date()
                        };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                    console.log('\n New user successfully created...', data.email);
                    console.log('\n New user password...' + userPassword + '\n');
                }
            }).catch(err => {
                console.error('Signup Sequelize Error: ', err)
            });
        }
    ));

    //---------------------------Local SignIn Strategy-------------------------------------
    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },

        function(req,email,password,done) {

            const User = user;
            const isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password,userpass);
            };

            // console.log('local strategy called with: %s', typeof(email), ' : ', email, typeof(password), ' : ',password);

            User.findOne({
                where: {
                    'email':email
                }
            }).then( function(user) {
                if (!user) {
                    return done(null, false, req.flash('signInMessage', 'Email does not exist!'));
                };
                if (!isValidPassword(user.pass, password)) {
                    return done(null, false, req.flash('signInMessage', 'Incorrect password!'));
                };
                // const userinfo = user.get(); 
                // return done(null, userinfo);
                return done(null, user);
            }).catch((err) => {
                console.log('Signin Sequelize Error: ', err);
                return done(null, false, req.flash('signInMessage', 'Something went wrong with your signin!'));
            });
        }
    ));

};


