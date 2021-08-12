const express=require('express');
const bodyParser =require('body-parser');
const cors=require('cors')
const port=3000;
const app=express();
const api=require('./router/api')
app.use(bodyParser.json());
app.use(cors())
app.use('/api',api)
app.listen(port,function(){
    console.log("server starting ")
})