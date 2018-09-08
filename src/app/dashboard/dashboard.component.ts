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

  // for put dates
  cleanedDates: Array<number> = [];
  cleanedJohn: Array<number> = [];
  cleanedLarry: Array<number> = [];
  resultArray: Array<any> = [];


  public columnChartData:any =  {
    chartType: 'ColumnChart',
    dataTable:
    // put the data source here
    // [
    //   ['Country', 'Performance', 'Profits'],
    //   ['Germany', 700, 1200],
    //   ['USA', 300, 600],
    //   ['Brazil', 400, 500],
    //   ['Canada', 500, 1000],
    //   ['France', 600, 1100],
    //   ['RU', 800, 1000]
    // ]
    this.resultArray,
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

      console.log(this.cleanDates(this.dates));
      console.log(this.cleanData(this.johnPoints));
      console.log(this.cleanData(this.larryPoints))
      console.log("==========");
      console.log(this.concatArray(this.cleanedDates, this.johnPoints, this.larryPoints));
      console.log("++++");


    })
    .catch( error => {
      console.log('Something went wrong when getting data', error)
    })
  };

  concatArray(column,arr1, arr2){
    for ( var x in column){
        this.resultArray.push([column[x],arr1[x],arr2[x]])
    };
    return this.resultArray;
}

cleanDates(arr){
  for ( var x in arr){
      if(arr[x] === null){
          this.cleanedDates.push(Number(arr[x-1]) + 1)
      } else {
      this.cleanedDates.push(Number(arr[x]))
      };
  }
  return this.cleanedDates
}

cleanData(arr){
  for ( var x in arr){
      if(arr[x] === null){
          arr[x] = '-';
      }
  }
  return arr
}


}
