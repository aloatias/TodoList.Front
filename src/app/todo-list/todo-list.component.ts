import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskDescription: string = "";

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this._taskService.GetAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
    });
  }

  addTask(): void {
    this._taskService.AddTask(this.taskDescription)
      .subscribe(() => {
        this._taskService.GetAllTasks()
          .subscribe(() => console.log("asdf"));
      });
  }
}
