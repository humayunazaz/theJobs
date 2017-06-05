import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobDetailComponent } from './post-job-detail.component';

describe('PostJobDetailComponent', () => {
  let component: PostJobDetailComponent;
  let fixture: ComponentFixture<PostJobDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostJobDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostJobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
