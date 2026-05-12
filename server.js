const express = require('express');
const app = express();
const PORT = 3000;


app.get('/' , (req,res) =>{
    const principal = req.query.principal
    const rate = req.query.rate
    const time= req.query.time

    if(!principal || !rate || !time){
        return res.status(400).json({
            err: "error"
        })
    }

    const P = parseInt(principal);
    const R = parseInt(rate);
    const T = parseInt(time);

    if(isNaN(P) || isNaN(R) || isNaN(T)){
        return res.json({
            err: "error not number"
        })
    }

    const SI = (P*R*T)/100;

    res.json({
        simpleInterest : SI 
    })
})

app.listen(PORT);
console.log("backend runing on port 3000");