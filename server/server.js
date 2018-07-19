require('dotenv').config();

//Express
const express = require('express');
const PORT = process.env.PORT || 8080; 
const bodyParser = require('body-parser');
const logger = require("morgan");

//Express Router and Routes 
const routes = require("./routes");
const app = express();

//Passport
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash');  

//MongoDB
const db = require('./models');
const config = require('./config/mongoDb/mongoConfig.js');
const mongoose = require("mongoose");

// Use morgan logger for logging requests
app.use(logger("dev"));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

//Passport, express session and passport session
app.use(session({ 
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized:true,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
})); // session secret

app.use(flash());// use connect-flash for flash messages stored in session

app.use((req, res, next) => {
  res.locals.signInMessage = req.flash('signInMessage');
  res.locals.signUpMessage = req.flash('signUpMessage');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(routes);

// require("./routes/api-routes-user&food")(app);
// require("./routes/api-routes-meal")(app);

require('./routes/auth/auth-routes')(app,passport);
require('./config/passport/passport')(passport, db.User);

mongoose.connect(process.env.MONGODB_URI || config.test.databaseUrl, config.test.databaseOption).then(() => {
  console.log('==> 🌎 MongoDB has been connected successfully!')
  app.listen(PORT, function(err) {
    if(!err) {
      console.log(`==> 🌎 Listening on port ${PORT}. Waiting for front end to call RESTful API of server`);
    } else {
      console.log('Database has err: ', err)
    }
  });
}).catch(err => {
  console.log(`Something wrong and here is the err: ${err}`);
  throw err;
});

