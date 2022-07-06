const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
router.use(bodyParser.json());

const cr = require("../conroller/user");

router.get("/",function(req,res)
{
    res.render("home");
})

module.exports = router