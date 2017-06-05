import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent implements OnInit {

  constructor() { }
  teams = [1, 2, 3];
  ngOnInit() {
  }

}
