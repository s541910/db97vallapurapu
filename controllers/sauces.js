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
    res.status(500);
    }
    };
// for a specific sauces.
exports.sauces_detail = async function(req, res) {
    try {
        result = await sauces.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${error} not found`);
    }
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
            console.log(err)
            res.send({"name":err.name,"message":err.message})
            res.send(err)
            res.status(500);
        //res.error(500,`{"error": ${err}}`);
        }
    };
// Handle sauces delete form on DELETE.
exports.sauces_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await sauces.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle sauces update form on PUT.
exports.sauces_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await sauces.findById( req.params.id)
        // Do updates of properties
        if(req.body.company) toUpdate.company = req.body.company;
        if(req.body.package) toUpdate.package = req.body.package;
        if(req.body.prize) toUpdate.prize = req.body.prize;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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
    res.status(500)
    }
    };

    // Handle a show one view with id specified by query
exports.sauce_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await sauces.findById( req.query.id)
        res.render('saucedetail', 
{ title: 'Sauce Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a Sauce.
// No body, no in path parameter, no query.
// Does not need to be async
exports.sauce_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('saucecreate', { title: 'Sauce Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }

};

exports.sauce_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await sauces.findById(req.query.id)
        res.render('sauceupdate', { title: 'Sauce Update', toShow: result } );
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }

};

// Handle a delete one view with id from query
exports.sauce_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await sauces.findById(req.query.id)
        res.render('saucedelete', { title: 'Sauce Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




