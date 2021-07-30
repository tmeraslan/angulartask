import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://query1.finance.yahoo.com/v7/finance/quote?symbols=" 
  private stockListSubject = new BehaviorSubject([]);
  constructor(private http:HttpClient) { }

  // function that return a stocks 
  getStocks(val:any):Observable<any>{
    return this.http.get<any>(`${this.APIUrl}${val}`);
  }

  //function Update stock list 
  public updateStockList(stockList: any): void {
    this.stockListSubject.next(stockList);
  }
  
  // return a stocklist as Observable
  public stockListObs(): Observable<any> {
    return this.stockListSubject.asObservable();
  }
  
}
