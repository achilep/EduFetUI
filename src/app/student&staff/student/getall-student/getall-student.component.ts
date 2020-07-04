import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-getall-student',
  templateUrl: './getall-student.component.html',
  styleUrls: ['./getall-student.component.css']
})
export class GetallStudentComponent implements OnInit {

  constructor(private srv: StudentService) { }

  Sudent: any = [];


  ngOnInit() {
    this.loadstudent();
  }

  loadstudent() {
    return this.srv.getstudent().subscribe(data => {
      this.Sudent = data;
    }) ;
  }
  deletstudent(id) {
    if (window.confirm('are you sure you want to delete this student !! ')) {
      this.srv.deletestudent(id).subscribe(data => {
        this.loadstudent();
      })

    }
  }

}
