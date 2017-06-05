import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogDetailComponent } from './single-blog-detail.component';

describe('SingleBlogDetailComponent', () => {
  let component: SingleBlogDetailComponent;
  let fixture: ComponentFixture<SingleBlogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBlogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
