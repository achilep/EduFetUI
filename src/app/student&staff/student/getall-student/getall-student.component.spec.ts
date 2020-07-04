import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallStudentComponent } from './getall-student.component';

describe('GetallStudentComponent', () => {
  let component: GetallStudentComponent;
  let fixture: ComponentFixture<GetallStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
