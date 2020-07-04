import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-creat-student',
  templateUrl: './creat-student.component.html',
  styleUrls: ['./creat-student.component.css']
})
export class CreatStudentComponent implements OnInit {
  form:FormGroup
  
      studentresponse: Student;
    
      get username() {
        return this.form.get('username');
      }
      get phone() {
        return this.form.get('phone');
      }
      
    
    
    
      stud: Student;
    
      constructor(private srv: StudentService, private router: Router) {
      }
    
      ngOnInit() {

        this.form = new FormGroup({
          regno: new FormControl('', [Validators.required ]),
          rollno: new FormControl('', [Validators.required]),
          class:new FormControl('', [Validators.required]),
          // name: new FormControl('', [Validators.required]),
          fname: new FormControl('', [Validators.required]),
          mname: new FormControl('', [Validators.required]),
         // dob: new FormControl('', [Validators.required]),
         // dor: new FormControl('', [Validators.required]),
          address:new FormControl('', [Validators.required]),
          city: new FormControl('', [Validators.required]),
          stat: new FormControl('', [Validators.required]),
          //pin: new FormControl('', [Validators.required, Validators.minLength(2)]),
          phone: new FormControl('', [Validators.required])
          
            });

        this.stud = new Student();
        this.stud.address= "";
        this.stud.city = "";
        this.stud.city = "";
       // this.stud.dob;
        //this.stud.dor;
        this.stud.fname="";
        this.stud.mname="";
        this.stud.name="";
        this.stud.phone="";
      //  this.stud.pin="";
        this.stud.regno;
        this.stud.rollno;
        this.stud.stat="";
        this.stud.id;
    
      }
    
    
      createStudent(formValue) {
        if (!this.form.valid) {
          console.log("error");
          console.log(formValue);
        }
        else {
          console.log(formValue);
          this.srv.creat(formValue).subscribe(data => {
            this.studentresponse=data;
            console.log(this.studentresponse);
            // this.router.navigate(['/']);
          })
        }
    
}
}
