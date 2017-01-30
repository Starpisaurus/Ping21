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

router.post('/login', function (req, res) {
    var user = {
        email: req.body.email,
        password: sha1(req.body.password)
    };

    dbController.findUser(user, function (results) {

        var status = 500;
        if (results) {
            console.log(results);
            if (results.length == 1) {
                if (results[0].password == user.password) {
                    status = 200;
                } else {
                    console.log('Password incorrect');
                    status = 401;
                }
            } else {
                console.log("User doesn't exists in database")
                status = 401;
            }
            res.status(status).json({prout:'prout'});
        } else {
            console.log(results);
        }
    });

});


module.exports = router;