import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  constructor() { }
  jobs;
  company;
  members;
  resume;
  ngOnInit() {
  }

}
