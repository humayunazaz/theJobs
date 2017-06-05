import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-resume',
  templateUrl: './manage-resume.component.html',
  styleUrls: ['./manage-resume.component.css']
})
export class ManageResumeComponent implements OnInit {

  constructor() { }
  type = 'manageResume';
  resumes = [1, 2, 3, 4];
  ngOnInit() {
  }

}
