import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCompanyHeaderComponent } from './browse-company-header.component';

describe('BrowseCompanyHeaderComponent', () => {
  let component: BrowseCompanyHeaderComponent;
  let fixture: ComponentFixture<BrowseCompanyHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCompanyHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCompanyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
