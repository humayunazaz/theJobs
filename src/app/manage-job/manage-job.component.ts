import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-job',
  templateUrl: './manage-job.component.html',
  styleUrls: ['./manage-job.component.css']
})
export class ManageJobComponent implements OnInit {

  constructor() { }
  type = 'manageJob';
  jobs = [1, 2, 3, 4, 5]
  ngOnInit() {
  }

}