import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { barChartConfig } from '../Models/BarChartConfig';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Online Player Demo Dashboard';

  data: any[];
  config: barChartConfig;
  elementId: String;

  constructor(
    // public dataService: DashboardService,
  ) { }

  ngOnInit() {
    this.data = [
      ['Task', 'Hours per Day'],
      ['Eat',      3],
      ['Commute',  2],
      ['Watch TV', 5],
      ['Video games', 4],
      ['Sleep',    10]];

      this.elementId = 'barchart example';
      this.config = new barChartConfig('example before pulling data', 0.5)
  };

}
