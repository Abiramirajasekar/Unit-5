const express = require("express")
const cors = require("cors")
const dbconnect = require("./config/db")

const userRouter = require("./features/users/users.router")


const app = express()

app.use("./users", userRouter)
app.use(express.json())
app.use(cors())




app.listen(8080, async () => {
    await dbconnect()
    console.log("Listening on http://localhost:8080")
})