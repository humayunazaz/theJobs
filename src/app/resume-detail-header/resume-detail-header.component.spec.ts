import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDetailHeaderComponent } from './resume-detail-header.component';

describe('ResumeDetailHeaderComponent', () => {
  let component: ResumeDetailHeaderComponent;
  let fixture: ComponentFixture<ResumeDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
