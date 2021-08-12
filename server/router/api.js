const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const jwt =require('jsonwebtoken')
const User=require('../model/user')
const db="mongodb+srv://admin:admin@employeemanagementsyste.ccfym.mongodb.net/TokenBased?retryWrites=true&w=majority";
//connection
mongoose.connect(db,err=>{
    if(err){
        console.log('error !!!'+err)
    }else{
        console.log("connect to mongodb")
    }

})

//register
router.post('/register',(req,res)=>{
let userData=req.body;
let user=new User(userData);
user.save((err,registeredUser)=>{
    if(err){
        console.log("error"+err)
    }else{
        let payload={subject:registeredUser._id}
        let token=jwt.sign(payload,"secrectkey")
        res.status(200).send({token})
    }
})
})

//login
router.post('/login',(req,res)=>{
    let userData=req.body;
    User.findOne({Email:userData.Email},(error,user)=>{
        if(error){
            console.log('error'+error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else{
                if(user.Password !==userData.Password){
                    res.status(401).send('invalid password')
                }else{
                    let payload={subject:user._id};
                    let token=jwt.sign(payload,"secrectkey")
                    res.status(200).send({token})
                    
                }
            }
        }
    })
    })
module.exports=router