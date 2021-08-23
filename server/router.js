const router = require("express").Router();
const { addTodo, fetchTodos } = require("./controllers/todos");

router.post("/addtodo", addTodo);
module.exports = router;
