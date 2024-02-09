const tasksRouter = require("express").Router();
const tasksList = require("../data/tasks.json");
const taskUtil = require("../util/taskUtil");

tasksRouter.get("/", (req, res) => {
  res.status(200).send(tasksList);
});

tasksRouter.get("/:id", (req, res) => {
  const taskIndex = taskUtil.isTaskPresent(tasksList, req.params.id);

  if (taskIndex) return res.status(200).send(taskIndex);

  return res.status(400).send(`Task with id ${req.params.id} not found!!`);
});

tasksRouter.post("/", (req, res) => {
  const newTask = req.body;

  if (taskUtil.valideTaskAndDescription(newTask))
    return res.status(400).send("Title or description should not be empty");

  if (taskUtil.isTaskStatusBoolean(newTask))
    return res.status(400).send("Completed should of type boolen");

  newTask.id = taskUtil.incrementTaskId(tasksList);

  tasksList.push(newTask);

  return res.status(200).send(newTask);
});

tasksRouter.put("/:id", (req, res) => {
  const taskUpdates = req.body;
  const taskIndex = taskUtil.getTaskIndex(tasksList, req.params.id);

  if (taskIndex === -1)
    return res.status(400).send(`Task with id ${req.params.id} not found`);

  tasksList[taskIndex] = { ...tasksList[taskIndex], ...taskUpdates };

  return res.status(200).send(tasksList[taskIndex]);
});

tasksRouter.delete("/:id", (req, res) => {
  const taskIndex = taskUtil.getTaskIndex(tasksList, req.params.id);

  if (taskIndex === -1)
    return res.status(400).send(`Task with id ${req.params.id} not found`);
  tasksList.splice(taskIndex, 1);
  return res.status(200).send(`Task with id ${req.params.id} deleted`);
});

module.exports = { tasksRouter };
