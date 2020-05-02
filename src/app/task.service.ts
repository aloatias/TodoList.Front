import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './Dtos/Task';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Urls } from './Shared/BaseUrl';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(
    private _http: HttpClient) {
  }
  
  AddTask(taskDescription: string) : Observable<Task> {
    return this._http.post<Task>(Urls.TASK_ADD, { "taskDescription": taskDescription }, httpOptions);
  }

  DeleteTask(taskId: string) {
    let url = Urls.TASK_DELETE + taskId;
    return this._http.delete(url, httpOptions);
  }

  GetAllTasks() : Observable<Task[]> {
    return this._http.get<Task[]>(Urls.TASK_GETALL);
  }

  UpdateTaskStatus(taskId: string) : Observable<Task> {
    return this._http.put<Task>(Urls.TASK_UPDATESTATUS, { "taskId": taskId }, httpOptions);
  }
}
