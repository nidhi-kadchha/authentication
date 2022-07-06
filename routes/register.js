const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
router.use(bodyParser.json());
const m = require("../models/user");
const cr = require("../conroller/user");
const UserModel = require('../models/user');
router.get("/", function(req,res)
{
    res.render("register");
});
router.post("/",cr.signup_post);
//router.get("/",cr.Signup_Get);
//router.post("/",cr.signup);

module.exports = router;




