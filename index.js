const express  = require('express');
const port = 3000;
const app = express();

app.get('/' , function(req,res){
    res.send("Hello world");
})
app.listen(port);
console.log(`App running on port : ${port}`);

// const express = require('express');
// const port = 3000;
// const app = express();

// app.post('/' , (req,res) => {
//     res.send("hello");
// })
// app.listen(port);
// console.log("app running");

