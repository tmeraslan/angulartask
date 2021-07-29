import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://query1.finance.yahoo.com/v7/finance/quote?symbols="
  constructor(private http:HttpClient) { }

  getDepList(val:any):Observable<any>{
    return this.http.get<any>(`${this.APIUrl}${val}`);
  }
}
