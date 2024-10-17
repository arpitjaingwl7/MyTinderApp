  const express=require('express')

  const app=express();
app.use("/",(req,res)=>{
    res.send("hello from server")
})

app.get("/l",(req,res)=>{
    res.send("lll")
})

  app.listen(3000,()=>{
    console.log("Server Running on port 3000")
  })