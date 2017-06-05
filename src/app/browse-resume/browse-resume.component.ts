import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-resume',
  templateUrl: './browse-resume.component.html',
  styleUrls: ['./browse-resume.component.css']
})
export class BrowseResumeComponent implements OnInit {

  constructor() { }
  type="resume";
  singles = [1, 2, 3, 4, 5];
  ngOnInit() {
  }

}
