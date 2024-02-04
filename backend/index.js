const express = require('express')
const {createTodo, updateTodo, deleteTodo} = require('./types')
const {todo} = require('./db')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/todo', async function(req,res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs!"
        })
        return 
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
})

app.get('/todos',async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put('/completed',async function(req,res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs!"
        })
        return
    }
    // mongo here
    await todo.updateOne({
      _id: updatePayload.id  
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.delete('/delete', async function(req,res){
    const deletePayload = req.body
    const parsedPayload = deleteTodo.safeParse(deletePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs!"
        })
        return
    }

    await todo.deleteOne({
        _id: deletePayload.id
    })

    res.json({
        msg: "Todo deleted!"
    })
})

const PORT = 3005

app.listen(PORT, ()=>{
    console.log(`the server is listening at port no: ${PORT}`)
})