const router = require("express").Router();
const {
  addTodo,
  fetchTodos,
  toggleTodo,
  deleteTodo,
} = require("./controllers/todos");

router.get("/todos", fetchTodos);
router.post("/todos", addTodo);
router.put("/todos", toggleTodo);
router.delete("/todos", deleteTodo);

module.exports = router;
