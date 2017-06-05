import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResumeHeaderComponent } from './add-resume-header.component';

describe('AddResumeHeaderComponent', () => {
  let component: AddResumeHeaderComponent;
  let fixture: ComponentFixture<AddResumeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResumeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResumeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
