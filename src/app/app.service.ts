import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/Rx';

@Injectable()
export class AppService {
  logView: ReplaySubject<any> = new ReplaySubject(1);
  constructor() { }

  changeView(value){
    this.logView.next(value);
  }
}
