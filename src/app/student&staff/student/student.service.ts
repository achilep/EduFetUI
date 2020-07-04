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

  getstudent(): Observable<Student> {
    return this.http.get<Student>(this.restAPIURL+'/api/student')
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }
  getstaff(): Observable<Staff> {
    return this.http.get<Staff>(this.restAPIURL+'/api/staff')
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

  deletestudent(id) {
    return this.http.delete<Student>(this.restAPIURL + '/api/student/' + id)
      .pipe
      (
        retry(1),
        catchError(this.handelError)

      );
  }
  deletestaff(id) {
    return this.http.delete<Student>(this.restAPIURL + '/api/staff/' + id)
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
