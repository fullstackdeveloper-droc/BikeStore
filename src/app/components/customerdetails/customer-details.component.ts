import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  customers: any[] = [];
  constructor(private _customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
    //this.customers = this.customerDetails;
  }

  getCustomers() {
    this._customerService.getCustomers().subscribe((data)=>{
      console.log(data);
      this.customers = data;
    });
  } 

}
