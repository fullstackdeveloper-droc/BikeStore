import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from '../components/models/products';
import { Customer } from '../components/models/customer';


//== JDW: endpoints
const getCustomers = "/Get/";
const getCustomerOrders = "/OrdersByCustomer/"
const getAllCustomerOrders = "/CustomerOrdersGetByCustomerId"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44356/api/Customers";
  constructor(private http: HttpClient) {

  }

  getCustomers(): Observable<Customer[]> {
    const url = this.apiUrl;
    return this.http.get<Customer[]>(url)
      .pipe(
        map(res =>
          res));
  }


  getCustomerOrders(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    //const url = this.apiUrl + getAllCustomerOrders;
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }
}
