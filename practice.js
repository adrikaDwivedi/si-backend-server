const express = require('express');
const app = express();

  app.use(express.json())
users = [{
    name: "john",
    kidneys: [{
        healthy: true,
    },{
        healthy: false,
    },{
        healthy: false,
    }]
}]
   ///// query parameters
app.get("/" , function(req,res){
    const johnKidneys = users[0].kidneys;
    const totalNumberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
           healthyKidneys =  healthyKidneys+1;
        }
    }
    const unhealthyKidneys = totalNumberOfKidneys - healthyKidneys;
    res.json({
        totalNumberOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})

////// data posting is done usong body
app.post("/" , function(req,res){
    const kidneys = req.body.kidneys;
    users[0].kidneys.push(
    {
        healthy: false,
    }, {
        healthy: true,
    })
    res.json({
        msg: "kidney added successfully"
    })
})


app.put("/" , function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete("/" , function(req,res){
    const newKidneys= [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done delete"});
})

app.listen(3000);