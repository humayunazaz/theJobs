import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseJobs1Component } from './browse-jobs1.component';

describe('BrowseJobs1Component', () => {
  let component: BrowseJobs1Component;
  let fixture: ComponentFixture<BrowseJobs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseJobs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseJobs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
