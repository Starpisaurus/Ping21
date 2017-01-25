'use strict'

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ipServer = "localhost";
var databaseServer = "mongodb://" + ipServer + ":27017/musictoolkit";
var sha1 = require('sha1');

function addUser(user){

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
    
}

function findUser(user){
    
    var ret = {};
    
    MongoClient.connect(databaseServer, function (err, db) {
        if (!err) {
            db.collection("siteUsers").find({email: user.email}).toArray(function (error, results) {
                if (error) throw error;
                console.log(results);
                if(results.length == 1){
                    if(sha1(results[0].password))
                    {password: user.password}
                    ret.status = 200;
                    
                }
                else{
                    console.log("User doesn't exists or wrong password !")
                    console.log(results);
                    ret.status = 401;
                    
                }
            });
        } else {
            ret.status = 500;
            ret.error = err;
            console.log(err);
        }

    });
    return ret;
}

exports.addUser = addUser;
exports.findUser = findUser;