import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatStudentComponent } from './creat-student/creat-student.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreatStaffComponent } from './creat-staff/creat-staff.component';
import { GetallStaffComponent } from './getall-staff/getall-staff.component';
import { GetallStudentComponent } from './getall-student/getall-student.component';



@NgModule({
  declarations: [CreatStudentComponent, CreatStaffComponent, GetallStaffComponent, GetallStudentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [CreatStudentComponent,CreatStaffComponent,GetallStaffComponent,GetallStudentComponent]
})
export class StudentModule { }
