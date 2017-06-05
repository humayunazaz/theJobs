import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }
  prices = [1, 2, 3];
  
  ngOnInit() {
  }

}
