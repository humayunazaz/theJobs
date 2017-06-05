import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCandidateHeaderComponent } from './job-candidate-header.component';

describe('JobCandidateHeaderComponent', () => {
  let component: JobCandidateHeaderComponent;
  let fixture: ComponentFixture<JobCandidateHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCandidateHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCandidateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
