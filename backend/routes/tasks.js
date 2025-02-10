const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Create a new task
router.post("/", async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Update a task
router.put("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.json({ message: "Task deleted" });
  } else {
    res.status(404).send("Task not found");
  }
});

module.exports = router;
