import { Injectable } from '@angular/core';
import { GoogleChartBaseService } from './google-chart-base.service';
import { barChartConfig } from '../Models/BarChartConfig';

declare var google: any;

@Injectable()
export class GoogleBarChartService extends GoogleChartBaseService {

  constructor() {super();}

  public BuildBarChart(elementId: any, data: any[], config: barChartConfig) : void {

    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };

    var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }
}
