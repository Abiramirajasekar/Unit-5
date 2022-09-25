const express = require("express");
const dbConnect = require("./config/db")
const app = express();
const userRouter = require("./features/Users/users.router")
const taskRouter = require("./features/Tasks/tasks.router")

// const port = 8080;
app.use(express.json())
app.use("/users", userRouter)
app.use("/tasks", taskRouter)

app.listen(8080, async () => {
    await dbConnect()
    console.log("Started On http://localhost:8080")
})