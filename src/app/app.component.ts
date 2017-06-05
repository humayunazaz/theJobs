import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class AppComponent implements OnInit{
  title = 'app works!';
  scroll;
  view = true;
  path;
  constructor(private appService:AppService){}
  onScroll(event){
    if(document.body.scrollTop > 150){
      this.scroll = true;
    } else{
      this.scroll = false;
    }
  }
  ngOnInit(){
    this.appService.changeView(this.view);

    this.appService.logView.subscribe(
      data => {
        this.view = data;
      }
    )
  }
}

