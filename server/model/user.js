const mongoose =require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    Name:String,
    Phone:Number,
    Zipcode:Number,
    Email:String,
    Password:String,
})
module.exports=mongoose.model('user',userSchema,'users')