import { Component, OnInit } from '@angular/core';
import* as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [9,7],
      type: 'column'
      
    }]
  };
}
