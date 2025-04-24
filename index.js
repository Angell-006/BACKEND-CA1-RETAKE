const express = require('express')
const app=express();
app.use(express.json());
const PORT=3010;

app.post("/signup",(req,res)=>{
    const{username,email,password,dob}=req.body;

    if(!username){
        res.send("Username cannot be empty.");
    }

    if(!email){
        res.send("Email cannot be empty.");
    }

    if(!password||password.length<8 || password.length>16){
        res.send("Password length should be greater than 8 or less than or equal to 16. ");
    }

    res.send("Successful!");
});

app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`)
});