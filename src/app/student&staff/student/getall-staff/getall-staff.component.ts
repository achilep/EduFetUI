import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-getall-staff',
  templateUrl: './getall-staff.component.html',
  styleUrls: ['./getall-staff.component.css']
})
export class GetallStaffComponent implements OnInit {

  constructor(private srv: StudentService) { }

  Staff: any = [];


  ngOnInit() {
    this.loadstaff();
  }

  loadstaff() {
    return this.srv.getstaff().subscribe(data => {
      this.Staff = data;
    }) ;
  }
  deletstaff(id) {
    if (window.confirm('are you sure you want to delete this student !! ')) {
      this.srv.deletestaff(id).subscribe(data => {
        this.loadstaff();
      })

    }
  }

}
