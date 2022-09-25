const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    content: { type: String, require: true },
    isCompleted: { type: Boolean, default: false },
    author: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

const Task = mongoose.model("task", taskSchema)

module.exports = Task