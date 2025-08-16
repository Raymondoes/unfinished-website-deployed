"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('views'));
router.get('/', function (req, res) {
    res.render('company');
});
module.exports = router;
