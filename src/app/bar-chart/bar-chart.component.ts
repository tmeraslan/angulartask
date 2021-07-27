import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2000', '2001'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [-75,-49], label: 'Series A'},
    {data: [48, 38], label: 'Series B'}
  ];
  ngOnInit(): void {
  }

}
