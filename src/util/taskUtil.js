const isTaskPresent = (tasksList, id) => {
  return tasksList.find((task) => task.id == id);
};

const getTaskIndex = (tasksList, id) => {
  return tasksList.findIndex((task) => task.id == id);
};

const valideTaskAndDescription = (task) => {
  return !task.title || !task.description;
};

const isTaskStatusBoolean = (task) => {
  return typeof task.completed !== "boolean";
};

const incrementTaskId = (tasksList) => {
  return tasksList.length + 1;
};

module.exports = {
  isTaskPresent,
  getTaskIndex,
  valideTaskAndDescription,
  isTaskStatusBoolean,
  incrementTaskId,
};
