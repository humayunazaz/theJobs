import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-navigation2',
  templateUrl: './navigation2.component.html',
  styleUrls: ['./navigation2.component.css']
})
export class Navigation2Component implements OnInit {

  constructor() { }
  @Input() scroll = false;
  ngOnInit() {
  }

}
