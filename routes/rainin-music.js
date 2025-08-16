"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.render('rainin-music');
});
router.get('/win-download', function (req, res) {
    res.download('rainindemob37.exe');
});
module.exports = router;
