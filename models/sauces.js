const mongoose = require("mongoose")
const saucesSchema = mongoose.Schema({
company: String,
package: String,
prize: Number
})
module.exports = mongoose.model("sauces", saucesSchema)