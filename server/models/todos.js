const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: { type: String, required: true },
  priority: { type: String, required: false },
  categoriesIds: [String],
  completed: { type: Boolean, default: false },
});

const TODO = mongoose.model("todo", todoSchema);

module.exports = TODO;
