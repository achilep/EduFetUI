import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StudentModule } from 'src/app/student&staff/student/student.module';


import { AppComponent } from './app.component';
import { StudentService } from './student&staff/student/student.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
