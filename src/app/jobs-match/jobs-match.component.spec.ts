import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsMatchComponent } from './jobs-match.component';

describe('JobsMatchComponent', () => {
  let component: JobsMatchComponent;
  let fixture: ComponentFixture<JobsMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
