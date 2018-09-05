import { Component, OnInit, Input } from '@angular/core';
import { barChartConfig } from '../../Models/BarChartConfig';
import { GoogleBarChartService } from '../../Services/google-bar-chart.service';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: barChartConfig;
  @Input() elementId: string;

  constructor(
    private barChartService: GoogleBarChartService
  ) { }

  ngOnInit() {
    this.barChartService.BuildBarChart(this.elementId, this.data, this.config);
  }

}
