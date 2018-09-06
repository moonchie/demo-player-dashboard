import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Online Player Demo Dashboard';

  contentSource: Object;
  dates: Array<number>;
  johnPoints: Array<number>;
  larryPoints: Array<number>;


  public columnChartData:any =  {
    chartType: 'ColumnChart',
    dataTable:
    // put the data source here
    [
      ['Country', 'Performance', 'Profits'],
      ['Germany', 700, 1200],
      ['USA', 300, 600],
      ['Brazil', 400, 500],
      ['Canada', 500, 1000],
      ['France', 600, 1100],
      ['RU', 800, 1000]
    ],
    options: {title: 'Countries'}
  };

  constructor(public dashboardService: DashboardService ) { }

  ngOnInit() {
    this.dashboardService.getJsonData()
    .then( result => {
      console.log(result);
      this.contentSource = result;
      this.dates = result['data']['DAILY']['dates'];
      this.johnPoints = result['data']['DAILY']['dataByMember']['players']['john']['points'];
      this.larryPoints = result['data']['DAILY']['dataByMember']['players']['larry']['points'];

      console.log(this.cleanDate(this.dates));
      console.log(this.johnPoints);
      console.log("==========");
      console.log(this.makeDataChar(this.dates, this.johnPoints, this.larryPoints));
      console.log("++++");


    })
    .catch( error => {
      console.log('Something went wrong when getting data', error)
    })
  };

  // data to be used
  result = [];
  makeDataChar(dates, data1, data2){
    let i = -1;
    while (dates[++i]){
      this.result.push([dates[i], data1[i], data2[i]]);
    }
    return this.result
  }


  cleanDate(dates){

    for (let x in dates){
      parseInt(dates[x]);
    }
    return dates;
  }


}
