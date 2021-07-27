
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import {Routes, RouterModule} from '@angular/router';
import { HighChartComponent } from './high-chart/high-chart.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { TableComponent } from './table/table.component';





@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    HighChartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
