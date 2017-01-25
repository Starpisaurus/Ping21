'use strict'

var express = require('express');
var router = express.Router();
var sha1 = require('sha1');
var dbController = require('../database/dbController.js');

router.post('/register', function (req, res) {
    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        register_date: new Date(),
        email: req.body.email,
        password: sha1(req.body.password)
    };
    
    dbController.addUser(user);

});

router.post('/login', function (req, res){
   var user = {
       email: req.body.email,
       password: sha1(req.body.password)
   };
    
    var ret = dbController.findUser(user);
    console.log(ret);
    if(ret && ret.status){
        res.status(ret.status).send();
    }
});


module.exports = router;