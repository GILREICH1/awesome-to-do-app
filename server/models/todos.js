const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "To Do content required"],
  },
  priority: {
    type: String,
    required: false,
    enum: ["High", "Medium", "Low"],
  },
  categoriesIds: {
    type: [String],
    require: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const TODO = mongoose.model("todo", todoSchema);

module.exports = TODO;
