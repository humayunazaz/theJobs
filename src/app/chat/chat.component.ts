import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  channels = ['#general', '#cafe-creme', '#freelancing', '#entrepreneurship', '#business', '#finance', '#developers'];
  activeChannel = '#general';
  messages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  type='chat';
  ngOnInit() {
  }

}
