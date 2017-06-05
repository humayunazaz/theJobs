import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResumeComponent } from './select-resume.component';

describe('SelectResumeComponent', () => {
  let component: SelectResumeComponent;
  let fixture: ComponentFixture<SelectResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
