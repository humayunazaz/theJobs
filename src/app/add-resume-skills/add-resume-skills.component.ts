import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-resume-skills',
  templateUrl: './add-resume-skills.component.html',
  styleUrls: ['./add-resume-skills.component.css']
})
export class AddResumeSkillsComponent implements OnInit {

  constructor() { }
  @Output() rem = new EventEmitter();
  ngOnInit() {
  }
  remove(){
    let value = '';
    this.rem.emit(value);
  }
}
