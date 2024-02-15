require('dotenv').config();

const express=require("express");

const app=express();

const port=4000;

app.get("/",(req,res)=>{  // app says to server ki agar "/" route pe koi bhi request ati h then send response 
    res.send("Hello Kunal");
})  

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on ${port}`);
})
