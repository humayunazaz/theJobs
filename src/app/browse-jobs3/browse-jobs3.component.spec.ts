import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobs3Component } from './browse-jobs3.component';

describe('BrowseJobs3Component', () => {
  let component: BrowseJobs3Component;
  let fixture: ComponentFixture<BrowseJobs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseJobs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseJobs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
