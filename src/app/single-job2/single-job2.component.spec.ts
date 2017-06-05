import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJob2Component } from './single-job2.component';

describe('SingleJob2Component', () => {
  let component: SingleJob2Component;
  let fixture: ComponentFixture<SingleJob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJob2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
