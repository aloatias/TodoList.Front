import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Dtos/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public taskDescription: string = "";
  public taskList: Task[];

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  addTask(): void {
    this._taskService.AddTask(this.taskDescription)
      .subscribe(() => {
        this.getAllTasks();
        this.taskDescription = "";
      });
  }

  deleteTask(taskId: string) {
    this._taskService.DeleteTask(taskId)
      .subscribe(() => {
        this.getAllTasks();
      });
  }

  updateTaskStatus(taskId: string) {
    this._taskService.UpdateTaskStatus(taskId)
      .subscribe(() => {
        this.getAllTasks();
      });
  }

  private getAllTasks() {
    this._taskService.GetAllTasks()
      .subscribe(tasks => this.taskList = tasks);
  }
}
