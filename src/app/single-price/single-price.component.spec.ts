import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePriceComponent } from './single-price.component';

describe('SinglePriceComponent', () => {
  let component: SinglePriceComponent;
  let fixture: ComponentFixture<SinglePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
