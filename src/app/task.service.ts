import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Task } from './Dtos/Task';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Urls } from './Shared/BaseUrl';
import { retry, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  params: new HttpParams()
};

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor(
    private _http: HttpClient) {
  }

  AddTask(taskDescription: string): Observable<Task> {
    return this._http
      .post<Task>(Urls.TASK_ADD, { "description": taskDescription }, httpOptions)
      .pipe(catchError(this.handleError));
  }

  DeleteTask(taskId: string) {
    let url = Urls.TASK_DELETE;
    httpOptions.params = httpOptions.params.set("taskId", taskId);

    return this._http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }

  GetAllTasks(): Observable<Task[]> {
    return this._http
      .get<Task[]>(Urls.TASK_GETALL)
      .pipe(catchError(this.handleError));
  }

  UpdateTaskStatus(taskId: string): Observable<Task> {
    return this._http
      .put<Task>(Urls.TASK_UPDATESTATUS, { "id": taskId }, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    alert(error.error);
    console.log(errorMessage);

    return throwError(errorMessage);
  }
}
