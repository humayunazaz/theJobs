import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleJob3Component } from './single-job3.component';

describe('SingleJob3Component', () => {
  let component: SingleJob3Component;
  let fixture: ComponentFixture<SingleJob3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleJob3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleJob3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
