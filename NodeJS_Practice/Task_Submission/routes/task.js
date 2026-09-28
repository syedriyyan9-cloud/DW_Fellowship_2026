const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middlewares/user");
const {
  getTask,
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/task");

router.get("/", authenticateUser, getTask);
router.post("/addTask", authenticateUser, createTask);
router.patch("/:id", authenticateUser, editTask);
router.delete("/:id", authenticateUser, deleteTask);

module.exports = router;
