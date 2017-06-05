import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResumeExperienceComponent } from './add-resume-experience.component';

describe('AddResumeExperienceComponent', () => {
  let component: AddResumeExperienceComponent;
  let fixture: ComponentFixture<AddResumeExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResumeExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResumeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
