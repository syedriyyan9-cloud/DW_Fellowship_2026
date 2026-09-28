const Task = require("../models/task");

async function getTask(req, res, next) {
  try {
    const tasks = await Task.find({ createdBy: req.user._id }).populate(
      "createdBy",
    );
    return res.render("task", { task: tasks });
  } catch (err) {
    next(err);
  }
}

async function createTask(req, res, next) {
  try {
    const { task } = req.body;
    if (!task) return res.status(400).json({ error: "Task name required" });
    await Task.create({ name: task, createdBy: req.user._id });
    return res.redirect("/task");
  } catch (err) {
    next(err);
  }
}

async function editTask(req, res, next) {
  try {
    const { name } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      { name },
      { new: true },
    );
    if (!task) return res.status(404).json({ error: "Not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id,
    });
    if (!task) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = { getTask, createTask, editTask, deleteTask };
