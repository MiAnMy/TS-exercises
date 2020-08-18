import ITask from "./interface";

class Task {
  private static id: number = 0;
  private id: number;
  private description: string;
  private done: boolean = false;

  constructor(task?: ITask) {
    this.id = Task.id;
    Task.id++;
    this.update(task);
  }

  public getID(): number {
    return this.id;
  }

  public update(task: ITask): void {
    this.description = task?.description || "";
    this.done = task?.done || this.done;
  }
}

export default Task;
