import { Component } from '@angular/core';
import* as Highcharts from 'highcharts';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  getAxiosData(){
    var api = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=FB`;
    axios.get(api)
      .then(function (response) {
       
    console.log(response);
      }).catch(error =>{
      console.log('message', error.message);
        console.log(error);

      })
  }

  
 
 
 
}

