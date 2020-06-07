
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Customer } from "../components/models/customer";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CustomersService } from "../services/customers.service";
import { catchError, finalize } from "rxjs/operators";
import { Order } from "../components/models/order";


export class CustomersDataSource implements DataSource<Customer> {
    private customer: Customer;
    //-- behavior subject for a given customer's orders
    private customerOrders = new BehaviorSubject<Order[]>([]);

    //-- behavior subject for server data returned
    private customerSubject = new BehaviorSubject<Customer>(this.customer);

    //-- behavior subject for server data returned
    private customersCollectionSubject = new BehaviorSubject<Customer[]>([]);

    //-- behavior subject for client flag: indicates loading status
    private loadingSubject = new BehaviorSubject<boolean>(false);

    //-- indicator subscribing to BehaviorSubject (Observable)
    public loading$ = this.loadingSubject.asObservable();

    public result: Customer[];


    //-- constructor -> imports: CustomersService
    constructor(private _customersService: CustomersService
    ) {
        //-- constructor body
    }

    connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
        /*  let ret = new Observable<Customer[]>();
         //... body of connect...
 
         return ret; */
        let ret = this.customersCollectionSubject.asObservable();
        this.result = this.customersCollectionSubject.value;
        console.log(this.result);
        return ret;
    }

    disconnect(collectionViewer: CollectionViewer): void {
        //... body of disconnect...//
        this.customersCollectionSubject.complete();
        this.loadingSubject.complete();
    }

    loadCustomerOrders(customerId: number, filter?: string,
        sortDirection?: string, pageIndex?: number, pageSize?: number) {
        //... body of loadCustomers...//  
        this.loadingSubject.next(true);

        this._customersService.findAllCustomerOrders(customerId).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(customers => this.customerOrders.next(customers));
    }

    loadCustomers(filter: string,
        sortDirection: string, pageIndex: number, pageSize: number) {
        //... body of loadCustomers...//  
        this.loadingSubject.next(true);

        this._customersService.findAllCustomers()
            .pipe(
                catchError(() =>
                    of([])),
                finalize(() =>
                    this.loadingSubject.next(false))
            )
            .subscribe(customers =>
                this.customersCollectionSubject.next(customers)
                
            )     
    }




}
