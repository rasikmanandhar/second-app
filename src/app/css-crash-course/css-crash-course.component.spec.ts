import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssCrashCourseComponent } from './css-crash-course.component';

describe('CssCrashCourseComponent', () => {
  let component: CssCrashCourseComponent;
  let fixture: ComponentFixture<CssCrashCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssCrashCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssCrashCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
