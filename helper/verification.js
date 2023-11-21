class Verification {
  // Returns
  // True - If id is present
  // False - If id is not present
  static verifyTaskId = (data, newTask) =>
    data.some((task) => task.id == newTask.id);
}

module.exports = Verification;
