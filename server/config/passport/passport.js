//load bcrypt
const bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {

    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
    // const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    //Serialize Sessions User
    passport.serializeUser((user, done) => {
        console.log('Serialize user called.  user:');
        console.log(user) // the whole raw user object!
        console.log('---------')
        done(null, { 
            _id: user._id, 
            email: user.email
        });
    });

    //Deserialize Session User 
    passport.deserializeUser((id, done) => {
        console.log('Deserialize user called.');
        User.findOne(
            { _id: id },
            // 'username',
            (err, user) => {
                console.log('*** Deserialize user, user:')
                console.log(user)
                console.log('--------------')
                done(null, user)
            }
        )
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

            console.log('\n local strategy called with: %s', typeof (email), ' : ', email, typeof (password), ' : ', password, '\n');

            const generateHash = function (pwd) {
                return new Promise((resolve, reject) => {
                    resolve(bCrypt.hashSync(pwd, bCrypt.genSaltSync(8), null));
                })
            };
            User.findOne(
                { 'email': email }
            ).then((user) => {
                // if(err) return done(err);
                if (user) {
                    return done(null, false, req.flash('signUpMessage', 'That email is already taken by others, please choose a different one'));
                    
                } else {
                    generateHash(password).then((res => {
                        const userPassword = res;
                        const data = 
                            {
                                email,
                                password: userPassword,
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                lastlogin_time: new Date()
                            };
                        console.log('\n New user successfully created...', data.email);
                        console.log('\n New user password...' + userPassword + '\n');
                        User.create(data).then(function (newUser) {
                            console.log('~~~~~~~~~~~~',newUser);
                            if (!newUser) {
                                return done(null, false);
                            }
                            if (newUser) {
                                return done(null, newUser);
                            }
                        }).catch(err => {
                            console.error('Signup MongoDB Create User Error: ', err)
                        });
                    }));
                }
            }).catch(err => {
                console.error('Signup MongoDB Check User Exist Error: ', err)
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

        function (req, email, password, done) {

            const User = user;
            console.log('/n', email, password, '/n');
            const isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            console.log('local strategy called with: %s', typeof(email), ' : ', email, typeof(password), ' : ',password);

            User.findOne(
                { 'email': email }
            ).then(function (user) {
                if (user._id === null ) {
                    return done(null, false, req.flash('signInMessage', 'Email does not exist!'));
                };
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, req.flash('signInMessage', 'Incorrect password!'));
                };
                // const userinfo = user.get(); 
                // return done(null, userinfo);
                return done(null, user);
            }).catch((err) => {
                console.log('Signin MongoDB Error: ', err);
                return done(null, false, req.flash('signInMessage', 'Something went wrong with your signin!'));
            });
        }
    ));

};


