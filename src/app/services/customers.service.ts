import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../components/models/customer';
import { Order } from '../components/models/order';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {

    apiAllCustomers = "https://localhost:44356/api/Customers";
    apiAllCustomerOrders = "https://localhost:44356/api/Customers";
    constructor(private http: HttpClient) { }

    findCustomerById(customerId: number): Observable<Customer> {
        return this.http.get<Customer>(`${this.apiAllCustomerOrders}/${customerId}`);
    }

    findAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.apiAllCustomers)
        .pipe(
          map(res =>
            res));
    }

    findAllCustomerOrders(customerId: number): Observable<Order[]> {
        return this.http.get(`${this.apiAllCustomerOrders}`, {
            params: new HttpParams()
                .set('customerId', customerId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        }).pipe(
            map(res => res["payload"])
        );
    }

    findCustomerDetails(
        customerId: number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<Customer> {

        return this.http.get(this.apiAllCustomers, {
            params: new HttpParams()
                .set('customerId', customerId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res => res["payload"])
        );
    }

    findCustomerOrders(
        customerId: number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3): Observable<Order[]> {

        return this.http.get(this.apiAllCustomers, {
            params: new HttpParams()
                .set('customerId', customerId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res => res["payload"])
        );
    }
}






