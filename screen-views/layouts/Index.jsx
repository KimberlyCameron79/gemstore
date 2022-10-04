const express = require("express");
const app =express();
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://kimberlycam43:Kc0370%24%24@cluster0.xbzyqi5.mongodb.net/gemstore?retryWrites=true&w=majority"
    ).then(()=> console.log("DBConnection Successful!"))
    .catch((err)=> {
        console.log(err);
    });


app.listen(3000, ()=>{
    console.log("Backend server is running!")
});