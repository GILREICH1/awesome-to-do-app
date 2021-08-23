const TODO = require("../models/todos");

async function fetchTodos(_, res) {
  try {
    const todos = await TODO.find();
    res.status(200).send(todos);
  } catch (err) {
    res.status(400).send("failed to fetch");
  }
}

async function addTodo({ body } = {}, res) {
  try {
    const { content, priority, categoriesIds } = body;
    const newTODO = new TODO({ content, priority, categoriesIds });
    const dbResponse = await newTODO.save();
    res.status(200).send(dbResponse._id);
  } catch (err) {
    res.status(400).send("failed to save");
  }
}

async function toggleTodo({ body }, res) {
  try {
    const { _id } = body;
    // const newTODO = new );
    const dbResponse = await TODO.findOne({ _id }, function (err, todo) {
      todo.completed = !todo.completed;
      todo.save();
    });
    res.status(200).send(dbResponse._id);
  } catch (err) {
    res.status(400).send("failed to update");
  }
}

async function removeTodo(id = "") {}

// export async function updateTodo(id ="", changes) {}

module.exports = { addTodo, fetchTodos, toggleTodo };
