"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var path = require("path");
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.use(express.static('views'));
router.get('/', function (req, res) {
    res.render('products');
});
module.exports = router;
