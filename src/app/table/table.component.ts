import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  headers = ["Symbol","Name","Previous","Year Low","Year High","Change From YearLow","Change From YearHigh"];
  rows = [
    {
      "Symbol":"RR",
      "Name":"name1",
      "Previous":"fd",
      "Year Low":"1",
      "Year High":"11",
      "Change From YearLow":"434",
      "Change From YearHigh":"4554"
    },
    {
      "Symbol":"AA",
      "Name":"name2",
      "Previous":"fd2",
      "Year Low":"22",
      "Year High":"222",
      "Change From YearLow":"3435",
      "Change From YearHigh":"5454"
    },
    {
      "Symbol":"CC",
      "Name":"name3",
      "Previous":"gh",
      "Year Low":"3",
      "Year High":"333",
      "Change From YearLow":"566",
      "Change From YearHigh":"565"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
