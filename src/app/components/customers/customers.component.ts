import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomersDataSource } from 'src/app/classes/customers-data-source';
import { CustomersService } from 'src/app/services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'customers-table',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements AfterViewInit, OnInit {
  customer: Customer;
  dataSource: CustomersDataSource;
  displayedColumns = ["seqNo", "description", "duration"];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  customers: Customer[];

  constructor(private _customersService: CustomersService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.customer = this.route.snapshot.data["customer"];
    this.dataSource = new CustomersDataSource(this._customersService);
    //--this.dataSource.loadCustomers(3);  -- One method exposed from the CustomerDataSource class
    //-- this.dataSource.loadCustomerOrders(this.customer.customerId);  -- Another method exposed, take customer id and gets the orders
    //this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);  -- from example

    //== JDW: This is the main collection view from the data source class
    this.dataSource.loadCustomers('', 'asc', 0, 10);
    this.customers = this.dataSource.result;
  }

  ngAfterViewInit() {
   /*  this.paginator.page
      .pipe(
        tap(() => this.loadCustomersView())
      )
      .subscribe();
 */
      this.loadCustomersView()
      console.log(this.dataSource);
  }

  loadCustomersView() {
    this.dataSource.loadCustomers(
      '',
      'asc',
      0,
      10);

      console.log(this.dataSource);
  }
}

