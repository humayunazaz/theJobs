import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'browse-single-resume',
  templateUrl: './browse-single-resume.component.html',
  styleUrls: ['./browse-single-resume.component.css']
})
export class BrowseSingleResumeComponent implements OnInit {
  @Input() index;
  constructor() { }

  ngOnInit() {
  }

}
