import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  type = 'contact';
  lat:number = 34.0201812;
  lng:number = -118.6919267;
  ngOnInit() {
  }

}
