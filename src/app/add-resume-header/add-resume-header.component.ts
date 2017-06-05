import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-resume-header',
  templateUrl: './add-resume-header.component.html',
  styleUrls: ['./add-resume-header.component.css']
})
export class AddResumeHeaderComponent implements OnInit {

  constructor() { }
  url;
  message = true;
  preview = false;

  readUrl(event) {
  if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
      this.message = false;
      this.preview = true;
    }
  }
  removeImg(){
    this.message = true;
    this.preview = false;
  }
  
  ngOnInit() {
  }

}
