import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-company',
  templateUrl: './browse-company.component.html',
  styleUrls: ['./browse-company.component.css']
})
export class BrowseCompanyComponent implements OnInit {

  constructor() { }
  type='browseCompany';
  singles = [1, 2, 3, 4];
  ngOnInit() {
  }

}
