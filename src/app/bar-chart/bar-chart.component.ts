import { Component, OnInit, Input, Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})


export class BarChartComponent implements OnInit {


  // a =this.StockList[0].fiftyDayAverageChange; 
  constructor(private service: SharedService) { }

  @Input() StockName = '';
  @Input() StockList: any = [0];

  ChangeFromYearLow: any = 0;
  ChangeFromYearHigh: any = 0;
  stop: any;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['YearHighDiff', 'yearLowDiff'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [this.ChangeFromYearLow, this.ChangeFromYearHigh], label: this.getSymbol(this.StockList) }
  ];

  ngOnInit() {
   this.service.stockListObs()
   .subscribe(stockList => {
    this.buildGraph(stockList);
   })  
  }

  ngOnDestroy() {
  }

  private buildGraph(stockList: any[]) {
    this.barChartData = [];
    if (!stockList) {
      return [];
    }

    const data = stockList.filter((stock,index)=> index < 6);
    for(let stockItem of data) {
        const dataEntry = { data: [this.getChangeFromYearLow(stockItem), this.getChangeFromYearHigh(stockItem)], label: stockItem.symbol }
        this.barChartData.push(dataEntry);
    }

  }

  private getChangeFromYearLow(stockItem: any): number {
    return (stockItem.regularMarketPreviousClose - stockItem.fiftyTwoWeekLow) * 100 / stockItem.fiftyTwoWeekLow;
  }

  private getChangeFromYearHigh(stockItem: any): number { 
    return (stockItem.regularMarketPreviousClose - stockItem.fiftyTwoWeekHigh) * 100 / stockItem.fiftyTwoWeekLow;
  }

  private getSymbol(stockList: any[]): string {
    if (!stockList || stockList.length === 0) {
      return ''
    }
    return stockList[0].symbol;
  }

  public hasValues(chartArray: any[]): boolean  {
    if (!chartArray || chartArray.length === 0) {
      return false;
    }
    return true;
  }


}



// for(const index in stockList) {
//   if(Number(index) < 6){
//     const stockItem = stockList[index];
//     const dataEntry = { data: [this.getChangeFromYearLow(stockItem), this.getChangeFromYearHigh(stockItem)], label: stockItem.symbol }
//     this.barChartData.push(dataEntry);
//   } else {
//     break;
//   }
 
// }