const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sidpd510:DSkZHhakkunch5KS@cluster0.jkfeezh.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}


