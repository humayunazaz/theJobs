import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseSingleResumeComponent } from './browse-single-resume.component';

describe('BrowseSingleResumeComponent', () => {
  let component: BrowseSingleResumeComponent;
  let fixture: ComponentFixture<BrowseSingleResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseSingleResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseSingleResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
