const express = require('express');
const port = 3000;
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('/' , (req,res) =>{
    const task = req.body.task;

    if(!task){
        return res.send("Task required");
    }

    const data = fs.readFileSync('todos.json' , 'utf-8');
    const todos = JSON.parse(data);

    todos.push(task);

    fs.writeFileSync('todos.json' , JSON.stringify(todos));

    res.send("task added");
})

app.get('/' , (req,res) =>{
    const data = fs.readFileSync('todos.json' , 'utf-8');
    const todos = JSON.parse(data);
    res.send(todos);
})

app.listen(port);
console.log("app running on port 3000");
