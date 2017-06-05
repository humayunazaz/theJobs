import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeListHeaderComponent } from './resume-list-header.component';

describe('ResumeListHeaderComponent', () => {
  let component: ResumeListHeaderComponent;
  let fixture: ComponentFixture<ResumeListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
