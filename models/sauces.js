    const mongoose = require("mongoose")
    const saucesSchema = mongoose.Schema({
    // company:{
    //     type: String,
    //     required: [true,"Type of the Sauce is required"]
    // } ,
    // package:{
    //     type: String,
    //     required: [true,"Package of the Sauce is required"],

    // } ,
    // prize: {
    //     type: Number,
    //     required: [true,"Price of the Sauce is required"],
    //     min:[3000,"Price Should be minimum of 3000$ "],
    //     max:[6000,"Price Cannot be greater than 6000$ "]
    // }
})
module.exports = mongoose.model("sauces", saucesSchema)