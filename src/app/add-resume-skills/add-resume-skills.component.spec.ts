import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResumeSkillsComponent } from './add-resume-skills.component';

describe('AddResumeSkillsComponent', () => {
  let component: AddResumeSkillsComponent;
  let fixture: ComponentFixture<AddResumeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResumeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResumeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
