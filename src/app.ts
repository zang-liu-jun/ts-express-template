import express from "express"

const app=express()

app.get("/test",(req, res)=>{
  res.send("ok")
})

app.listen(8080,()=>{
  console.log("http://localhost:8080/")
})
