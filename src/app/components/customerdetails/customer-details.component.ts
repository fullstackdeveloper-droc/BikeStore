import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { AppSpinnerComponent } from '../widgets/app-spinner/app-spinner.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Customer } from '../models/customer';
import { CustomerOrders } from '../models/customer-orders';
import { Products } from '../models/products';
import { Order } from '../models/order';
import { PonyService } from '../widgets/pagination/pagination-pony.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subject, merge } from 'rxjs';
import { Page } from '../models/page';
import { debounceTime, startWith, switchMap, share } from 'rxjs/operators';
import { CustomersComponent } from '../customers/customers.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomerDetailsComponent { // implements OnInit {
  customers: any[] = [];
  msg: string = '';
  showSpinner: boolean = true;

  //== JDW: This is the setup for parent/child table using Material Table
  /* dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement | null; */

  @ViewChild(MatSort) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Order>>;

  /* dataSource: MatTableDataSource<User>;
  usersData: User[] = [];
  columnsToDisplay = ['name', 'email', 'phone'];
  innerDisplayedColumns = ['street', 'zipCode', 'city'];
  expandedElement: User | null; */

  /* CUSTOMER DATA SOURCE (just testing new API)*/
  
  dataSource: MatTableDataSource<Customer>;
  customerData: Customer[] = [];
  columnsToDisplay = ['firstName', 'lastName', 'phone', 'email', 'street', 'city', 'state'];
  innerDisplayedColumns = ['orderId', 'orderDate', 'shippedDate', 'orderStatus', 'storeId'];
  propertiesToDisplay = ['firstName', 'lastName', 'phone', 'email', 'street', 'city', 'state'];
  expandedElement: Customer | null; 
  orders: Order[] = [];
  customer: Customer;

  filterForm: FormGroup;
  page: Observable<Page<Customer>>
  pageUrl = new Subject<string>();

  //== JDW: Products data source (just testing new API)
  /* dataSource: MatTableDataSource<Customer>;
  customerData: Customer[] = [];
  columnsToDisplay = ['productName', 'modelYear', 'listPrice', 'brandId', 'categoryId', 'brandName', 'categoryName'];
  columnsHeaders = ['Product', 'Model Year', 'List Price', 'Brand Id', 'Category Id', 'Brand Name', 'Category Name']; */

  constructor (
    private _customerService: CustomerService, 
    private cd: ChangeDetectorRef,
    private _ponyService: PonyService
    ) { 

    //#region ** pony service, component, and widget for reusable server-side pagination, FOR NOW USING ANGULAR MATERIAL SERVER-SIDE **
    /* this.filterForm = new FormGroup({
      is_available: new FormControl(),
      search: new FormControl()
    });

    const filterValue = this.filterForm.valueChanges.pipe(
      debounceTime(200),
      startWith(this.filterForm.value),
    );
    this.page = merge(filterValue, this.pageUrl).pipe(
      switchMap(urlOrFilter => this._ponyService.list(urlOrFilter)),
      share()
    ); */
    //#endregion
  
  
  }

  onPageChanged(url: string) {
    this.pageUrl.next(url);
  }

/*  ngOnInit() {
    this.showSpinner = true;
    this.msg = 'Loading Customers...';
    this.getCustomers();
    //this.getAllCustomerOrders();


    //== JDW: This is the setup for parent/child table using Material Table
   USERS.forEach(user => {
      if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
        this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort; 
 
     $(window).on('load', function() {
      $("#cover").hide();
   });
    //this.customers = this.customerDetails;
  } */

  getCustomers() {
    this._customerService.getCustomers().subscribe((data)=>{//.getCustomerOrders(7).subscribe((data)=>{
      console.log(data);
      data.forEach(cust => {
        if (cust.orders && Array.isArray(cust.orders) && cust.orders.length) {
          this.customerData = [...this.customerData,  {...cust, orders: new MatTableDataSource(cust.orders)}];
        } else {
          this.customerData = [...this.customerData, cust];
        }
      }); 


      //this.dataSource = new MatTableDataSource(this.customerData);
      //this.dataSource.sort = this.sort; 

      /* data.forEach(user => {
        if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
          this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
        } else {
          this.usersData = [...this.usersData, user];
        }
      }); */
      this.dataSource = new MatTableDataSource(this.customerData);
      this.dataSource.sort = this.sort; 

      setTimeout(() => {
        this.showSpinner = false;
      }, 700);

      setTimeout(() => {
        this.showSpinner = false;
      }, 700);
    });
  } 

  getAllCustomerOrders() {
    this._customerService.getCustomerOrders(7).subscribe((data)=>{//.getCustomerOrders(7).subscribe((data)=>{
      console.log(data);
      this.customer = data;

      /* data.forEach(user => {
        if (user.addresses && Array.isArray(user.addresses) && user.addresses.length) {
          this.usersData = [...this.usersData, {...user, addresses: new MatTableDataSource(user.addresses)}];
        } else {
          this.usersData = [...this.usersData, user];
        }
      }); */
      this.dataSource = new MatTableDataSource(this.customerData);
      this.dataSource.sort = this.sort; 

      setTimeout(() => {
        this.showSpinner = false;
      }, 700);
    });
  } 

  //== this is for new angular material table
  toggleRow(element: Customer) {
    element.orders && (element.orders as MatTableDataSource<Order>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Order>).sort = this.innerSort.toArray()[index]);
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Order>).filter = filterValue.trim().toLowerCase());
  } 
}

//===============  SOME EXAMPLES OF CREATING MATTABLES IN CLASS MODEL FILES  ===================================================//

//== this is for the example for the page using Angular Material
export interface User {
  name: string;
  email: string;
  phone: string;
  addresses?: Address[] | MatTableDataSource<Address>;
}

export interface Address {
  street: string;
  zipCode: string;
  city: string;
}

export interface UserDataSource {
  name: string;
  email: string;
  phone: string;
  addresses?: MatTableDataSource<Address>;
}

const USERS: User[] = [
  {
    name: "Mason",
    email: "mason@test.com",
    phone: "9864785214",
    addresses: [
      {
        street: "Street 1",
        zipCode: "78542",
        city: "Kansas"
      },
      {
        street: "Street 2",
        zipCode: "78554",
        city: "Texas"
      }
    ]
  },
  {
    name: "Eugene",
    email: "eugene@test.com",
    phone: "8786541234",
  },
  {
    name: "Jason",
    email: "jason@test.com",
    phone: "7856452187",
    addresses: [
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Utah"
      },
      {
        street: "Street 5",
        zipCode: "23547",
        city: "Ohio"
      }
    ]
  }
]; 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
