import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-candidate',
  templateUrl: './job-candidate.component.html',
  styleUrls: ['./job-candidate.component.css']
})
export class JobCandidateComponent implements OnInit {

  constructor() { }
  type="candidate";
  candidates = [1, 2, 3, 4];
  ngOnInit() {
  }

}
