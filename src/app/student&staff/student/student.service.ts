import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Staff } from '../model/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  restAPIURL = 'https://edufet.herokuapp.com';
  httpOption = { 
    headers : new HttpHeaders({
 'content-type' : 'application/json' 
    }) 
  }
  


  constructor(private http: HttpClient) { }

  get(): Observable<Student> {
    return this.http.get<Student>(this.restAPIURL)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  getbyID(id): Observable<Student> {
    return this.http.get<Student>(this.restAPIURL + '/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  creat(Studentdto): Observable<Student> {
    return this.http.post<Student>(this.restAPIURL+'/api/student', Studentdto )
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }
  createstaff(Staff): Observable<Staff> {
    return this.http.post<Staff>(this.restAPIURL+'/api/staff', Staff )
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  delete(id) {
    return this.http.delete<Student>(this.restAPIURL + '/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }
  updet(id, employee) {
    return this.http.put<Student>(this.restAPIURL + '/' + id, JSON.stringify(employee),this.httpOption)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }

  handelError(error) {
    let errormessage = "";
    if (error.error instanceof ErrorEvent) {
      errormessage = error.error.message;
    }
    else {
      errormessage = `ERROR code : ${error.status} \n ERROR message : ${error.message}`;
    }
    window.alert(errormessage);
    return throwError(errormessage)
  }
}
