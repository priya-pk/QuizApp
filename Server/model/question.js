const mongoose = require('mongoose');

const Schema = mongoose.Schema
const questionSchema = new Schema({
  no: String,
  question: String,
  options: [{
    optionValue:String,
    optionText: String
  }],
  ans: String,
  answer: String,
  selectedOption: String
})

module.exports = mongoose.model('question',questionSchema,'questions');