const TODO = require("../models/todos");
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

module.exports = { addTodo, fetchTodos };
