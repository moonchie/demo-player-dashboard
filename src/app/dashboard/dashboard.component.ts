import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: Object;

  constructor(public dataService: DashboardService) { }

  ngOnInit() {
    this.dataService.getJsonData()
      .then( result => {
        console.log('All data', result);
        this.data = result;
      })
      .catch( error => {
        console.log('Error happens when getting data', error);
      })
  }

}
