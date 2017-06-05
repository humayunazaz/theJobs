import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css']
})
export class AddResumeComponent implements OnInit {

  constructor() { }
  type="addResume";
  education = [1];
  experience = [1];
  skills = [1];

  add(){
    this.education.push(1);
  }
  addExperience(){
    this.experience.push(1);
  }
  addSkill(){
    this.skills.push(1);
  }
  removeEducation(event, i){
    this.education.splice(i, 1);
  }
  removeExperience(event, i){
    this.experience.splice(i, 1);
  }
  removeSkills(event, i){
    this.skills.splice(i, 1);
  }
  ngOnInit() {
  }

}
