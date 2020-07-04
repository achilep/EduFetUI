import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallStaffComponent } from './getall-staff.component';

describe('GetallStaffComponent', () => {
  let component: GetallStaffComponent;
  let fixture: ComponentFixture<GetallStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
