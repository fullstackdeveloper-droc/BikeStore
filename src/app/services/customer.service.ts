import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


//== JDW: endpoints
const getCustomers = "/GetAllCustomers/";
const getCustomerOrders = "/OrdersByCustomer/"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44326/api/Customer";
  constructor(private http: HttpClient) { 
    
  }
 
  getCustomers(): Observable<any> {
    const url = this.apiUrl + getCustomers;
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }

  getCustomerOrders(): Observable<any> {
    const url = this.apiUrl + getCustomerOrders;
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }
}
