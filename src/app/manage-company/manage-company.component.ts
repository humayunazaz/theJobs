import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {

  constructor() { }
  type="manageCompany";
  company = [1, 2, 3, 4];
  ngOnInit() {
  }

}
