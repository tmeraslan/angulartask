

// this component takes care  of drawing the graph

import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})


export class BarChartComponent implements OnInit {


  
  constructor(private service: SharedService) { }

  @Input() StockName = ''; //the stockSymbole name we get from father component
  @Input() StockList: any = [0]; // all the stocks

  ChangeFromYearLow: any = 0; //partmers we caluculate and sent to the graph
  ChangeFromYearHigh: any = 0; //partmers we caluculate and sent to the graph
  stop: any;

  //builed the graph
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



//function send to tha graph a data
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

  //caluculate the parmters to the graph
  private getChangeFromYearLow(stockItem: any): number {
    return (stockItem.regularMarketPreviousClose - stockItem.fiftyTwoWeekLow) * 100 / stockItem.fiftyTwoWeekLow;
  }

  //caluculate the parmters to the graph
  private getChangeFromYearHigh(stockItem: any): number { 
    return (stockItem.regularMarketPreviousClose - stockItem.fiftyTwoWeekHigh) * 100 / stockItem.fiftyTwoWeekLow;
  }

  //get the Stock Symbole
  private getSymbol(stockList: any[]): string {
    if (!stockList || stockList.length === 0) {
      return ''
    }
    return stockList[0].symbol;
  }

  //check if there are values to buield thr graph
  public hasValues(chartArray: any[]): boolean  {
    if (!chartArray || chartArray.length === 0) {
      return false;
    }
    return true;
  }


}

