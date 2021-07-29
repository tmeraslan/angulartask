import { Component, OnInit, Input } from '@angular/core';

import {SharedService} from 'src/app/shared.service';


interface DATA {
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service:SharedService) { }

  StockName = '';
  
  StockList: any;
//  StockList: any = [];

click(){
  this.service.getDepList(this.StockName).subscribe(data =>{
    
    this.StockList =  data.quoteResponse.result;
    console.dir(this.StockList)
  });
}







// refreshDepList(){
//   this.service.getDepList().subscribe(data=>{
//     this.StockList=data;
//     console.dir(this.StockList)
//   });
// }


}
//[(ngModel)]="StockName"
 // title = 'angulartask';
//valid input 
  //FB AAPL 
  //FB,AAPL
  //bb,ggg,dddd
  //bb ggg dddd

  //let input = 'FB AAPL';
  //'FB AAPL'-->['FB','AAPL'] -> 'FB,AAPL'
  //input.split(" ").join(',')
  //invalid examples
  //1111,F3333,343423534,
  //23232 3434 1112 
  //          whitespace 
  //!@//%^&##$345  special characters



  //use regex  for invalid inputs 
  // all numbers , all special characters 

  //getAxiosData(searchQuery){
   // var api = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${searchQuery}`;
    //axios.get(api)
    //  .then(function (response) {
      // handle success
    //  console.log(response);
    //  }).catch(error =>{
     //   console.log('message', error.message);
    //    console.log(error);

    //  })
  //}




  //   getAxiosData() {
  //   const api = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${this.StockName}`;
  //   console.log(api);
  //   axios.get(api)
  //     .then(function (response) {
  //      // this.StockList = response.data.quoteResponce.result
  //      this.StockList="Add Department";
  //       console.dir(response.data.quoteResponse);
  //       //response.data.quoteRespose.result
  //       const data =response.data.quoteResponse.result;
      
  //       //this.StockList=data;
  //       console.log(this.StockList);
  //       //this.StockList=response.data.quoteRespose.result;
  //       //console.log(this.StockList);
  //     }).catch(error => {
  //       console.log('message', error.message);

  //       console.log(error);

  //     })
  // }