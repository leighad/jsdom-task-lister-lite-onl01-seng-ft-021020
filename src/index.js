document.addEventListener("DOMContentLoaded", () => {
  // initialize taskList class
  const taskList = new TaskList();

  //grab necessary DOM elements
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = TaskList.renderTasks());

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  })

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
