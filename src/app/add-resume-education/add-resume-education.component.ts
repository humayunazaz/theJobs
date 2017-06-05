import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-resume-education',
  templateUrl: './add-resume-education.component.html',
  styleUrls: ['./add-resume-education.component.css']
})
export class AddResumeEducationComponent implements OnInit {

  constructor() { }
  @Output() rem = new EventEmitter();
  ngOnInit() {
  }
  remove(){
    let value = '';
    this.rem.emit(value);
  }
}
