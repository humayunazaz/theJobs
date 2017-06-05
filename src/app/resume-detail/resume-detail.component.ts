import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.css']
})
export class ResumeDetailComponent implements OnInit {

  constructor() { }
  type="resumeDetail";
  educations = [1, 2];
  experiences = [1, 2, 3];
  ngOnInit() {
  }

}
