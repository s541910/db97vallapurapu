var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var sauces_controller = require('../controllers/sauces');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Sauces ROUTES ///
// POST request for creating a Sauces.
router.post('/sauces', sauces_controller.sauces_create_post);
// DELETE request to delete Sauces.
router.delete('/sauces/:id', sauces_controller.sauces_delete);
// PUT request to update Sauces.
router.put('/sauces/:id', sauces_controller.sauces_update_put);
// GET request for one Sauces.
router.get('/sauces/:id', sauces_controller.sauces_detail);
// GET request for list of all Sauces.
router.get('/sauces', sauces_controller.sauces_list);
module.exports = router;