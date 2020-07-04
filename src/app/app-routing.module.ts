import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatStudentComponent } from './student&staff/student/creat-student/creat-student.component';
import { Routes, RouterModule } from '@angular/router';
import { CreatStaffComponent } from './student&staff/student/creat-staff/creat-staff.component';
import { GetallStaffComponent } from './student&staff/student/getall-staff/getall-staff.component';
import { GetallStudentComponent } from './student&staff/student/getall-student/getall-student.component';


const routes: Routes = [

  //{path : '' , component : CreatStaffComponent},
  //{path : 'createStudent' , component : CreatStudentComponent},
  {path : '' , component : GetallStaffComponent},
  {path : 'getallStudent' , component : GetallStudentComponent},
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: true } // <-- debugging purposes only
      ),
    CommonModule
  ]
})
export class AppRoutingModule { }
