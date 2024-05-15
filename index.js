const express = require("express");
const app = express();


var users = [{
  name:"john",
  kidneys : [{
    healthy : false
  }]
}]

app.use(express.json());

app.get("/",function(req,res){
  const johnKidney = users[0].kidneys;
  const NoOfKidneys = johnKidney.length; 
  let NoOfHealthyKidney = 0;
  for(let i=0;i<johnKidney.length;i++){
    if(johnKidney[i].healthy)
      NoOfHealthyKidney = NoOfHealthyKidney + 1;
  }
  const NoOfUnhealthyKidney = NoOfKidneys - NoOfHealthyKidney;

  res.json({
    NoOfKidneys,
    NoOfHealthyKidney,
    NoOfUnhealthyKidney

  })
})

app.post("/",function(req,res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy : isHealthy
  })
 
  res.json({
    msg : "done"
  })


})

app.put("/",function(req,res){
  for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy = true;
  }

  res.json({
  })
})

app.delete("/",function(req,res){
  const newKidneys =[];
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy){
      newKidneys.push({
        healthy:true
      })
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done"})

  }
})


app.listen(3001);