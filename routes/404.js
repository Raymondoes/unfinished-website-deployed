"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
router.get('/', function (req, res) {
    res.render('error404');
});
module.exports = router;
