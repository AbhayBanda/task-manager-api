const express = require("express");
const app = express();
const { tasksRouter } = require("./routes/tasksRoute");
const port = 3000;
app.use(express.json());

app.use("/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Task Manager Api");
});

app.listen(port, () => {
  console.log(`Task Manager App running on port - ${port}`);
});
