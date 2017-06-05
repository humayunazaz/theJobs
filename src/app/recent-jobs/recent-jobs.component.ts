import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.css']
})
export class RecentJobsComponent implements OnInit {

  constructor() { }
  jobs = [1, 2, 3, 4, 5];
  ngOnInit() {
  }

}
