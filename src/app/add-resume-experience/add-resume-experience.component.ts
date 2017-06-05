import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-resume-experience',
  templateUrl: './add-resume-experience.component.html',
  styleUrls: ['./add-resume-experience.component.css']
})
export class AddResumeExperienceComponent implements OnInit {

  constructor() { }
  @Output() rem = new EventEmitter();
  ngOnInit() {
  }
  remove(){
    let value = '';
    this.rem.emit(value);
  }
}
