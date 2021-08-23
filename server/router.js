const router = require("express").Router();
const { addTodo, fetchTodos, toggleTodo } = require("./controllers/todos");

router.get("/todos", fetchTodos);
router.post("/todos", addTodo);
router.put("/todos", toggleTodo);

module.exports = router;
