import { useState } from "react"

export function CreateTodo(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value
            setTitle(value)
            console.log(value)
        }}/><br />
        <input type="text" placeholder="description" onChange={function(e){
            const value = e.target.value
            setDescription(value)
            console.log(value)
        }}/><br />
        <button onClick={()=>{
            fetch('http://localhost:3005/todo',{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description 
                }),
                headers: {
                    "content-type": "application/json"
                }

            }).then(async function(res){
                const json = await res.json()
                alert("todo added")
            })
        }}>Add todo</button>
    </div>
}