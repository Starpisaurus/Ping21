'use strict'

var express = require('express');
var router = express.Router();

router.post('/test', function(req,res){
    res.send(req.body.name);
});

module.exports = router;