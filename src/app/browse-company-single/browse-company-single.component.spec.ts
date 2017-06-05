import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCompanySingleComponent } from './browse-company-single.component';

describe('BrowseCompanySingleComponent', () => {
  let component: BrowseCompanySingleComponent;
  let fixture: ComponentFixture<BrowseCompanySingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCompanySingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCompanySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
