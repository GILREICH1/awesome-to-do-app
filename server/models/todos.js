const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: String,
  priority: String,
  categoriesIds: [String],
  completed: {
    type: Boolean,
    default: false,
  },
});

const TODO = mongoose.model("todo", todoSchema);

module.exports = TODO;
