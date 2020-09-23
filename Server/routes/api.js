const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = require('../model/question');

const db = "mongodb+srv://user_priya:prjz9496@mycluster.udzj7.azure.mongodb.net/Quiz?retryWrites=true&w=majority";

mongoose.connect(db, err =>{
  if(err){
    console.log('Error'+err);
  }
  else{
    console.log('Conneccted to mongoDB');
  }
})

router.get('/',(req,res)=>{
  res.send('From API')
})

router.get('/questions',(req,res)=>{
  Question.find()
  .then((questions)=>{
    res.send(questions)
  })
})

module.exports = router;