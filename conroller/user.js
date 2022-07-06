const express = require('express');
const md5 = require('md5');
const bcrypt = require('bcrypt');
const saltround = 2;
const ejs = require('ejs');
const router = express.Router();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
router.use(bodyparser.json());
const app = express();
const db = require("../database/db");
const UserModel = require('../models/user');
const passport = require('passport');
const { response, route } = require('../app');

app.use(bodyparser.urlencoded({extended:true}));


const signup_post = async(req,res,next) =>
{
 UserModel.register(new UserModel({email: req.body.userName}), req.body.password, (err, user) => {
 if(err) {
   console.log(err);
 }
 else {
   passport.authenticate('local')(req, res, () => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'application/json');
     res.json({success: true, status: 'Registration Successful!'});
   });
 }
});

  /*
  var un = req.body.userName;
  var pass = req.body.password;
  UserModel.register({email:un},pass, function(err,newuser)
  {
    if(err)
    {
      console.log(err);
      console.log(un);
      console.log(pass);
      res.render("register");
    }
    else
    {
      passport.authenticate("local"),req1,res1,function()
      {
        req1.render("secrets");
      }
    }
  });
 
  var un = req.body.userName;
  var pass = req.body.password;
 
  var userdetail = new UserModel({
    email : un,
    password : md5(pass)
  });
  userdetail.save(function(err)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("secrets");
    }
  });
  bcrypt.hash(pass,saltround,function(err,hash)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      var userdetail = new UserModel({
        email : un,
        password :hash
      });
      userdetail.save(function(err)
      {
        if(err)
        {
          console.log(err);
        }
        else
        {
          res.render("secrets");
        }
      });
    }
  })*/
}

const signin_post = async(req,res,next) =>
{
  
  /*
  var un = req.body.userName;
  var pass = req.body.password;
  UserModel.findOne({email:un , password:pass},function(err)
  {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.render("secrets");
    }
  })*/
}
module.exports = {signup_post,
  signin_post};