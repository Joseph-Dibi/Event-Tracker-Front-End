import { Run } from './models/run';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MileTrackerService {
  // private baseUrl = 'http://localhost:8080/';
  private url = environment.baseUrl + 'api/miles';
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

  index() {
    return this.http.get<Run[]>(this.url)
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );  }
  create(todo) {
    return this.http.post<Run[]>(this.url, todo, this.httpOptions)
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );
  }
  update(todo) {
    return this.http.patch<Run>(this.url + '/' + todo.id, todo, this.httpOptions).pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     }));
  }
  destroy(id) {
    return this.http.delete<Run>(this.url + '/' + id).pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     }));

  }
  show(id) {
    return this.http.get<Run>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );
  }
  average() {
    return this.http.get<number[]>(this.url + '/average')
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );
  }
  weekAverage(week) {
    return this.http.get<number[]>(this.url + '/' + week + '/average')
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );
  }
  total() {
    return this.http.get<number[]>(this.url + '/total')
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );
  }
  weekTotal(week) {
    return this.http.get<number[]>(this.url + '/' + week + '/total')
    .pipe(
      catchError((err: any) => {
       console.log(err);
       return throwError('KABLAMMY');
     })
 );
  }
  constructor(private http: HttpClient) { }
}
