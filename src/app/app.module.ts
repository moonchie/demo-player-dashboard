import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DataTableModule} from "angular-6-datatable";
import { FormsModule }   from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BarChartComponent } from './dashboard/Chart/bar-chart.component';
import { GoogleBarChartService } from './Services/google-bar-chart.service';
import { GoogleChartBaseService } from './Services/google-chart-base.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
  ],
  providers: [ GoogleBarChartService, GoogleChartBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
