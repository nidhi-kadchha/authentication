const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const authenticate = require('authenticate');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(session({
    secret : "12345-67890-09876-54321",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs');
app.use(bodyparser.urlencoded({extended:true}));

const home_router = require('./routes/home');
const register_Router = require('./routes/register');
const login_router = require('./routes/login');
app.use('/',home_router);
app.use('/register',register_Router);
app.use('/login',login_router);

function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }
}

app.listen(3000,function()
{
    console.log("Server Running At Port : 3000");
});

module.exports = app;