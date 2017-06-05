import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResumeSingleComponent } from './manage-resume-single.component';

describe('ManageResumeSingleComponent', () => {
  let component: ManageResumeSingleComponent;
  let fixture: ComponentFixture<ManageResumeSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageResumeSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResumeSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
