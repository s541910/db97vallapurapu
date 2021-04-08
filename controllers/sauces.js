var sauces = require('../models/sauces')
// List of all sauces
exports.sauces_list = async function (req, res) {
    // List of all sauces
    res.send('NOT IMPLEMENTED: sauces list');
};
exports.sauces_list = async function(req, res) {
    try{
    thesauces = await sauces.find();
    res.send(thesauces);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific sauces.
exports.sauces_detail = function(req, res) {
res.send('NOT IMPLEMENTED: sauces detail: ' + req.params.id);
};
exports.sauces_create_post = async function (req, res) {
    console.log(req.body)
    let document = new sauces();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dimensions":"Stylish", "Color":"Violet", "Price":1500}
    document.company = req.body.company;
    document.package = req.body.package;
    document.prize = req.body.prize;
    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
    };
// Handle sauces delete form on DELETE.
exports.sauces_delete = function(req, res) {
res.send('NOT IMPLEMENTED: sauces delete DELETE ' + req.params.id);
};
// Handle sauces update form on PUT.
exports.sauces_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: sauces update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.sauces_view_all_Page = async function(req, res) {
    try{
    thesauces = await sauces.find();
    res.render('sauces', { title: 'sauces Search Results', results: thesauces });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
