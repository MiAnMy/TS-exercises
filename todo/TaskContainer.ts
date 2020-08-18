import Task from "./Task";
import ITask from "./interface";

class TaskContainer {
  private tasks: Array<Task> = [];

  removeTask(id: number): void {
    this.tasks = this.tasks.filter((task: Task) => task.getID() !== id);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  addTasks(tasks: Array<Task>): void {
    this.tasks = this.tasks.concat(tasks);
  }

  updateTask(id: number, data: ITask) {
    this.tasks.map((task: Task) => {
      if (task.getID() === id) task.update(data);
    });
  }
}

export default TaskContainer;
