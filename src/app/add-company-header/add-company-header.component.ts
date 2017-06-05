import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-company-header',
  templateUrl: './add-company-header.component.html',
  styleUrls: ['./add-company-header.component.css']
})
export class AddCompanyHeaderComponent implements OnInit {

  constructor() { }
  url;
  message = true;
  preview = false;
  ngOnInit() {
  }

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

}
