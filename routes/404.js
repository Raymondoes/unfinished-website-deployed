"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', 'public')));
router.get('/', function (req, res) {
    res.render('error404');
});
module.exports = router;
