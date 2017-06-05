import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }
  @Input() scroll = false;
  ngOnInit() {
  }

}
