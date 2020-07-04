import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Staff } from 'src/app/student&staff/model/staff.model';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-creat-staff',
  templateUrl: './creat-staff.component.html',
  styleUrls: ['./creat-staff.component.css']
})
export class CreatStaffComponent implements OnInit {
  form:FormGroup
  
      staffrespone: Staff;
    
    
    
    
      staff: Staff;
    
      constructor(private srv: StudentService, private router: Router) {
      }
    
      ngOnInit() {

        this.form = new FormGroup({
          email: new FormControl('', [Validators.required ]),
          mobile: new FormControl('', [Validators.required]),
          dept:new FormControl('', [Validators.required]),
          // name: new FormControl('', [Validators.required]),
          empname: new FormControl('', [Validators.required]),
          sex: new FormControl('', [Validators.required]),
         // dob: new FormControl('', [Validators.required]),
         // dor: new FormControl('', [Validators.required]),
          address:new FormControl('', [Validators.required]),
          city: new FormControl('', [Validators.required]),
          stat: new FormControl('', [Validators.required]),
          //pin: new FormControl('', [Validators.required, Validators.minLength(2)]),
          phone: new FormControl('', [Validators.required])
          
            });

        this.staff = new Staff();
        this.staff.address= "";
        this.staff.city = "";
       // this.stud.dob;
        //this.stud.dor;
        this.staff.empname="";
        this.staff.sex="";
        this.staff.mobile="";
        this.staff.phone="";
      //  this.stud.pin="";
        this.staff.email;
        this.staff.state="";
        this.staff.dept;
    
      }
    
    
      createStudent(formValue) {
        if (!this.form.valid) {
          console.log("error");
          console.log(formValue);
        }
        else {
          console.log(formValue);
          this.srv.createstaff(formValue).subscribe(data => {
            this.staffrespone=data;
            console.log(this.staffrespone);
             this.router.navigate(['createStudent']);
          })
        }
    
}
}
