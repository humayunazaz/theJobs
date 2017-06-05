import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResumeEducationComponent } from './add-resume-education.component';

describe('AddResumeEducationComponent', () => {
  let component: AddResumeEducationComponent;
  let fixture: ComponentFixture<AddResumeEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResumeEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
