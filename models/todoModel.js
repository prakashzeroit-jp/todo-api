const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: String,
    required: true,
  },
},{timestamps :  true});


module.exports = mongoose.model('Todo',todoSchema);
