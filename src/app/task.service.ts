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
    return this._http.post<Task>(Urls.TASK_ADDTASK, { "taskDescription": taskDescription }, httpOptions);
  }

  GetAllTasks() : Observable<Task[]> {
    return this._http.get<Task[]>(Urls.TASK_GETALLTASKS);
  }
}
