"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    var ipAddr = req.ip;
    console.log("Client IP: ".concat(ipAddr));
    console.log('Client:', ipAddr, 'Entered Home');
    res.render('index');
});
module.exports = router;
