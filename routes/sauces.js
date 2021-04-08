var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('sauces',{title: 'search Results of Sauces'});  
 });
module.exports = router;