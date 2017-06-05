import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyHeaderComponent } from './job-apply-header.component';

describe('JobApplyHeaderComponent', () => {
  let component: JobApplyHeaderComponent;
  let fixture: ComponentFixture<JobApplyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
