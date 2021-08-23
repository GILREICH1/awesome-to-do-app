const TODO = require("../models/todos");

async function fetchTodos(_, res) {
  try {
    const todos = await TODO.find().lean().exec();
    const todosWithID = todos.map((todo) => ({ ...todo, id: todo._id }));
    res.status(200).send(todosWithID);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function addTodo({ body } = {}, res) {
  try {
    const { content, priority, categoriesIds } = body;
    const newTODO = new TODO({ content, priority, categoriesIds });
    const dbResponse = await newTODO.save();
    res.status(201).send(dbResponse._id);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function toggleTodo({ body }, res) {
  try {
    const { _id } = body;
    const dbResponse = await TODO.findOne({ _id }, function (err, todo) {
      todo.completed = !todo.completed;
      todo.save();
    });
    res.status(200).send(dbResponse._id);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function deleteTodo({ body }, res) {
  try {
    const { _id } = body;
    const dbResponse = await TODO.deleteOne({ _id });
    res.status(201).send(dbResponse);
  } catch (err) {
    res.status(500).send(err);
  }
}

// export async function updateTodo(id ="", changes) {}

module.exports = { addTodo, fetchTodos, toggleTodo, deleteTodo };
