'use strict'

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ipServer = "localhost";
var databaseServer = "mongodb://" + ipServer + ":27017/musictoolkit";
var sha1 = require('sha1');
var siteUsers = 'siteUsers';

function addUser(user) {

    MongoClient.connect(databaseServer, function (err, db) {
        if (!err) {
            db.collection("siteUsers").find({
                email: user.email
            }).toArray(function (error, results) {
                if (error) throw error;
                if (results.length == 0) {
                    db.collection("users").insert(user, {
                        upsert: true
                    }, function (error, results) {
                        //res.status(200).send();
                        console.log("User '" + user.firstname + "' has been added to database !");
                    });
                } else {
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

function UpdateUser(user) {

    MongoClient.connect(databaseServer, function (err, db) {
        if (!err) {
            db.collection(siteUsers).find({
                email: user.email
            }).toArray(function (error, results) {
                if (error) throw error;
                if (results.length == 0) {
                    console.log("No user found with email : " + user.email);
                } else if (results.length == 1) {

                    var userUpdated = {};
                    for (var prop in user) {

                        if (user[prop] != undefined && user[prop] != null) {
                            userUpdated[prop] = user[prop];
                        }
                    }

                    db.collection.update({
                        email: user.email
                    }, {
                        $set: userUpdated
                    });
                } else {

                }
            })
        } else {

        }
    })
}

function findUser(user, callback) {

    var ret = {
        status: 0
    };

    MongoClient.connect(databaseServer, function (err, db) {
        if (err) return funcCallback(err);
        
            db.collection("siteUsers").find({
                email: user.email
            }).toArray(function (error, result){
                if(error) throw error;
                callback(result);
            });
    });
    console.log(ret);

}

exports.addUser = addUser;
exports.findUser = findUser;