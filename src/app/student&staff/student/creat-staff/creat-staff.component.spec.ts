import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatStaffComponent } from './creat-staff.component';

describe('CreatStaffComponent', () => {
  let component: CreatStaffComponent;
  let fixture: ComponentFixture<CreatStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
