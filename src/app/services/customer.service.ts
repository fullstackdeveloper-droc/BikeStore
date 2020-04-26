import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
//const apiUrl = "https://localhost:44326/api/Products";
//const getCustomers = "/GetCustomers/";
export class CustomerService {
  apiUrl = "https://localhost:44326/api/Products";
  constructor(private http: HttpClient) { 
    
  }
 
  getCustomers(): Observable<any> {
    const getCustomers = "/GetCustomers/";
    const url = this.apiUrl + getCustomers;
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res)
    );
  }
}
