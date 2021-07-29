import { Component, OnInit, Input } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
import { FormGroup, FormControl } from '../../node_modules/@angular/forms';



interface DATA {
  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service:SharedService) { }

  reactiveForm: FormGroup;
  StockName = '';
  stop:any;
  StockList: any;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      stockName: new FormControl('', [])
    })

    this.reactiveForm.get("stockName").valueChanges.subscribe(selectedValue => {
      if (selectedValue) {
        this.service.getDepList(selectedValue)
          .subscribe(data =>{
            this.StockList =  data.quoteResponse.result;
          
            this.service.updateStockList(this.StockList);
          });
      }
    })
  }
  
  ngOnDestroy() {
  }



}
