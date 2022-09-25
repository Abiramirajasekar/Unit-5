const express = require("express")
const app = express.Router();
const User = require("./users.model")

app.get("/", async (req, res) => {
    try {
        let user = await User.find();
        res.send(user)
    }
    catch (e) {
        res.send(e.message)
    }
})

app.post("/", async (req, res) => {
    let { email } = req.body
    try {
        let user = await User.findOne({ email })
        if (user) {
            return res.status(404).send("cannot create with this email address")
        }
        let newUser = await User.create(req.body)
        res.send(
            {
                token: `${newUser.id}:${newUser.email}:${newUser.password}`
            }
        )
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})







app.delete("/:id", (req, res) => {
    let { id } = req.params
    User.findOneAndRemove({ id: id }).then((user) => {
        if (!user) {
            res.status(400).send(id + "is not deleted! please try again")
        }
        else {
            res.status(200).send(id + "is deleted successfully")
        }
    })
        .catch((err) => {
            console.log(err)
            res.status(500).send("ERROR OCCURRED:" + err)
        })
})



app.get("/:id", (req, res) => {
    let { id } = req.params;
    try {
        const getUser = User.findById(id)
        return res.send(getUser)
    } catch (err) {
        res.status(500).send("Error:" + err)
    }
})

module.exports = app