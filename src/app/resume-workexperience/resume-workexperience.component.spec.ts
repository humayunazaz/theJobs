import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkexperienceComponent } from './resume-workexperience.component';

describe('ResumeWorkexperienceComponent', () => {
  let component: ResumeWorkexperienceComponent;
  let fixture: ComponentFixture<ResumeWorkexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeWorkexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWorkexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
