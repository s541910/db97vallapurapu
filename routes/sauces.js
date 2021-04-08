var express = require('express');
const sauces_controlers= require('../controllers/sauces');
var router = express.Router();
/* GET saucess */
router.get('/', sauces_controlers.sauces_view_all_Page );
module.exports = router;