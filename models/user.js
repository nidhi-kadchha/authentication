
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const app = express();
app.use(session({
    secret : "our little secret.",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
var db = require("../database/db");

const UserSchema = new mongoose.Schema({
    email : String,
    password : String
});
UserSchema.plugin(passportLocalMongoose);


const UserModel = mongoose.model('Usermodel',UserSchema,'users');


module.exports=mongoose.model("users",UserSchema);

/*
module.exports={
    createData:function(inputData, callback){
                 
       userData= new userTable(inputData);
       userData.save(function(err, data){
         if (err) throw err;
          return callback(data);
       });
    }
}
*/
module.exports = UserModel;