import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCompanySingleComponent } from './manage-company-single.component';

describe('ManageCompanySingleComponent', () => {
  let component: ManageCompanySingleComponent;
  let fixture: ComponentFixture<ManageCompanySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCompanySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCompanySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
