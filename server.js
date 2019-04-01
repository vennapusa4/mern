const express=require('express')
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/rabin', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

const users=require('./API/users')
const posts=require('./API/posts')
const profile=require('./API/profile')

const port=process.env.PORT || 5000

const app=express();
app.use(express.json())
app.use('/api/users',users);
app.use('/api/posts',posts);
app.use(profile);
app.listen(port,()=>{
    console.log("server runid");    
})