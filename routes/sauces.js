var express = require('express');
const sauces_controllers = require('../controllers/sauces');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET saucess */
router.get('/',sauces_controllers.sauces_view_all_Page);
/* GET detail Sauce page */
router.get('/detail',secured, sauces_controllers.sauce_view_one_Page);

router.get('/create',secured, sauces_controllers.sauce_create_Page);
router.get('/update',secured, sauces_controllers.sauce_update_Page);

/* GET create sauce page */
router.get('/delete', sauces_controllers.sauce_delete_Page);
module.exports = router;