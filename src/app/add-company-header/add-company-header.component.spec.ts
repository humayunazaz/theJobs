import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompanyHeaderComponent } from './add-company-header.component';

describe('AddCompanyHeaderComponent', () => {
  let component: AddCompanyHeaderComponent;
  let fixture: ComponentFixture<AddCompanyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompanyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompanyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
