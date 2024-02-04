import { useState } from "react"

export function Todos({todos}){
    
    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={()=>{
            fetch('http://localhost:3005/completed',{
                method: "PUT",
                body: JSON.stringify({
                    id: todo._id
                },{
                    completed: true
                }),
                headers: {
                    "content-type": "application/json"
                }

            }).then(async function(res){
                const json = await res.json()
                alert("todo updated")
            })
        }}>{todo.completed == true? "completed" : "Mark as complete"}</button>
                </div>
            })
        }
    </div>
}