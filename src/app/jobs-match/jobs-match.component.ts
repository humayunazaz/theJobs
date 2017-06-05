import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jobs-match',
  templateUrl: './jobs-match.component.html',
  styleUrls: ['./jobs-match.component.css']
})
export class JobsMatchComponent implements OnInit {
  @Input() version:number;
  @Input() type = 0;
  constructor() { }
  jobs = [1, 2, 3, 4, 5];

  ngOnInit() {
  }

}
