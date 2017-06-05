import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobs2Component } from './browse-jobs2.component';

describe('BrowseJobs2Component', () => {
  let component: BrowseJobs2Component;
  let fixture: ComponentFixture<BrowseJobs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseJobs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseJobs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
