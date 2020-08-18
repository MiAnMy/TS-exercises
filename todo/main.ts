import TaskContainer from "./TaskContainer";
import Task from "./Task";

const taskContainer: TaskContainer = new TaskContainer();

taskContainer.addTask(new Task());
taskContainer.addTask(new Task({ description: "Eat" }));
taskContainer.addTask(new Task({ description: "Sleep", done: false }));
taskContainer.addTask(new Task({ description: "Read", done: true }));
taskContainer.addTasks([
  new Task({ description: "Fishing", done: true }),
  new Task({ description: "Swim", done: true }),
]);
taskContainer.updateTask(0, { done: true });
taskContainer.updateTask(0, { description: "Hike" });
taskContainer.removeTask(5);

console.log(taskContainer);
