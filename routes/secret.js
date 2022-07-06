const express = require('express');
const router = express.Router();

router.get("/secrets",function(req,res)
{
    if(req.isAuthenticated())
    {
        res.render("secrets");
    }
    else
    {
        res.render("login")
    }
    
});

module.exports() = router;