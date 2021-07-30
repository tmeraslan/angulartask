// this component takes care  of drawing the Table

import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export  class TableComponent implements OnInit {

  @Input() StockList: any=[];



  headers = ["Symbol","Name","Previous","Year Low","Year High","Change From YearLow","Change From YearHigh"];
 

  constructor() { }

  ngOnInit(): void {
  }

}


