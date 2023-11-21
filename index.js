const express = require("express");
const port = 3000;
const app = express();
const data = require("./db/tasksData");
const Verification = require("./helper/verification");

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Welcome to task manager Application...");
});

app.get("/tasks", (req, res) => {
  return res.send(data);
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;

  const task = data.find((task) => task.id == id);

  if (task) return res.status(200).send(task);

  return res.status(404).send(`Task with id "${id}" not found!`);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;

  if (Verification.verifyTaskId(data, newTask))
    return res
      .status(400)
      .send("Error in adding a new Task, make sure the task id is unique");

  data.push(newTask);
  return res.status(200).send(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const newTask = req.params;

  const isTaskPresent = Verification.verifyTaskId(data, newTask);

  if (!isTaskPresent)
    return res
      .status(404)
      .send("Error in updating the Task, task id is invalid");

  const taskIndex = data.findIndex((task) => task.id == req.params.id);

  if (typeof req.body.id === "undefined" || data[taskIndex].id == req.body.id) {
    data[taskIndex] = { ...data[taskIndex], ...req.body };
    return res.status(200).send(data[taskIndex]);
  }

  return res.status(404).send("Error in updating the Task!!");
});

app.delete("/tasks/:id", (req, res) => {
  const isTaskPresent = Verification.verifyTaskId(data, req.params);

  if (!isTaskPresent)
    return res
      .status(404)
      .send("Error in deleting the Task, task id is invalid");

  const taskIndex = data.findIndex((task) => task.id == req.params.id);
  data.splice(taskIndex, 1);

  return res.status(200).send("Task deleted successfully!!");
});

app.listen(port, () => {
  console.log(`Application running on port - ${port}`);
});
