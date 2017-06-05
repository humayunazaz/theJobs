import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCompanyComponent } from './browse-company.component';

describe('BrowseCompanyComponent', () => {
  let component: BrowseCompanyComponent;
  let fixture: ComponentFixture<BrowseCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
