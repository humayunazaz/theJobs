import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResumeMediaComponent } from './add-resume-media.component';

describe('AddResumeMediaComponent', () => {
  let component: AddResumeMediaComponent;
  let fixture: ComponentFixture<AddResumeMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResumeMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResumeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
