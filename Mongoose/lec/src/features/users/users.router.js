const express = require("express")

const users = require("./users.schema")
const app = express.Router();

app.get("/users", async (req, res) => {
    let u = await users.find()
    res.send(u)

})

module.exports = app