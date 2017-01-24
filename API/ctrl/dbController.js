'use strict'

var express = require('express');
var router = express.Router();

router.post('/register', function (req, res) {
    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        register_date: new Date(),
        email: req.body.email,
        password: sha1(req.body.password)
    };

    MongoClient.connect(databaseServer, function (err, db) {
        if (!err) {
            db.collection("users").find({email: user.email}).toArray(function (error, results) {
                if (error) throw error;
                if(results.length == 0){
                    db.collection("users").insert(user,{upsert:true}, function(error, results){
                        res.status(200).send();
                        console.log("User '" + user.firstname +"' has been added to database !");
                    });
                }
                else{
                    console.log("User allready exist or something else is wrong : ")
                    console.log(results);
                }
            });
        } else {
            res.status(500).send(err);
            console.log(err);
        }
    });

});

module.exports = router;