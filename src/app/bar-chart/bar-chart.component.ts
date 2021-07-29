import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() StockList: any=[0];
  
  a =this.StockList[0].fiftyDayAverageChange;
   
  constructor() { 
    

  }
  
  

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['YearHighDiff', 'yearLowDiff'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [55,44], label: 'Series A'},
    {data: [23, 38], label: 'Series B'}
  ];
  ngOnInit(): void {
  }

  click(){
    console.log(this.StockList[0].fiftyDayAverageChange);
    console.log(this.a);
  
  }


}
