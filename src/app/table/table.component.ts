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



// {
//   "Symbol":"RR",
//   "Name":"name1",
//   "Previous":"fd",
//   "Year Low":"1",
//   "Year High":"11",
//   "Change From YearLow":"434",
//   "Change From YearHigh":"4554"
// },
// {
//   "Symbol":"AA",
//   "Name":"name2",
//   "Previous":"fd2",
//   "Year Low":"22",
//   "Year High":"222",
//   "Change From YearLow":"3435",
//   "Change From YearHigh":"5454"
// },