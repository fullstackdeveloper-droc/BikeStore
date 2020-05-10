import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from '../components/models/products';


//== JDW: endpoints
const getCustomers = "/GetAllCustomers/";
const getCustomerOrders = "/OrdersByCustomer/"
const getAllCustomerOrders = "/CustomerOrdersGetByCustomerId"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = "https://localhost:44356/api/Products";
  constructor(private http: HttpClient) {

  }

  getCustomers(): Observable<Products[]> {
    const url = this.apiUrl;// + getCustomers;
    return this.http.get<any>(url)
      .pipe(
        map(res =>
          res));
  }


  getCustomerOrders(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    //const url = this.apiUrl + getAllCustomerOrders;
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }
}
