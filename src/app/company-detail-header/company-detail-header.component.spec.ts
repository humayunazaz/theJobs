import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailHeaderComponent } from './company-detail-header.component';

describe('CompanyDetailHeaderComponent', () => {
  let component: CompanyDetailHeaderComponent;
  let fixture: ComponentFixture<CompanyDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
