import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'select-resume',
  templateUrl: './select-resume.component.html',
  styleUrls: ['./select-resume.component.css']
})
export class SelectResumeComponent implements OnInit {

  constructor() { }
  resumes = [1, 2, 3];
  ngOnInit() {
  }

}
