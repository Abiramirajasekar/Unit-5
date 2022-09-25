const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    lname: String,
    email: String,
    gender: String,
    age: Number
})

const users = mongoose.model("user", userSchema)
module.exports = users