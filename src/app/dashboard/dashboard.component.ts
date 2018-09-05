import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { GoogleChartComponent } from 'angular-google-charts';
import { barChartConfig } from '../Models/BarChartConfig';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // dataPlayer: Object;
  // dataSettings: Object;
  // dates: [String];
  // john: [Number];
  // larry: [Number];
  // myData: any;
  title = 'Online Player Demo Dashboard';

  data: any[];
  config: barChartConfig;
  elementId: String;

  @ViewChild('chart')
  chart: GoogleChartComponent;

  constructor(
    public dataService: DashboardService,
  ) { }

  ngOnInit() {
    // this.dataService.getJsonData()
    //   .then( result => {
    //     console.log('All data', result);
    //     this.john = result['data']['DAILY']['dataByMember']['john'];
    //     this.larry = result['data']['DAILY']['dataByMember']['larry'];
    //     this.dates = result['data']['DAILY']['dates'];
    //     this.dataSettings = result['dataSettings'];
    //     console.log(this.dates);

    //   })
    //   .catch( error => {
    //     console.log('Error happens when getting data', error);
    //   })
};

}
