var express = require('express');
const sauces_controllers = require('../controllers/sauces');
var router = express.Router();
/* GET saucess */
router.get('/', sauces_controllers.sauces_view_all_Page);
/* GET detail Sauce page */
router.get('/detail', sauces_controllers.sauce_view_one_Page);

router.get('/create', sauces_controllers.sauce_create_Page);
router.get('/update', sauces_controllers.sauce_update_Page);

/* GET create costume page */
router.get('/delete', sauces_controllers.sauce_delete_Page);




module.exports = router;