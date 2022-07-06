var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../authentication/models/user');
enctype="multipart/form-data"
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());