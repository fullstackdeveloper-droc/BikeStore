import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CustomerDetailsComponent } from './components/customerdetails/customer-details.component';
import { TopnavMenuComponent } from './components/topnav-menu/topnav-menu.component';
import { AppSpinnerComponent } from './components/widgets/app-spinner/app-spinner.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductsDashboardModule } from './components/products-dashboard/products-dashboard.module';
//import { CustomersPaginationComponent } from './components/widgets/customers-pagination/customers-pagination.component';

// import the feature module here so you can add it to the imports array below
import { PonyService } from './components/widgets/pagination/pagination-pony.service';
/* import { PonyListComponent } from './pony-list/pony-list.component';  -  This is the CustomerDetailsComponent listed above */
import { PaginatorComponent } from './components/widgets/paginator-widget/paginator-widget.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    //CustomerDetailsComponent,
    TopnavMenuComponent,
    AppSpinnerComponent,
    PaginatorComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

    //== JDW - feature module
    ProductsDashboardModule
  ],
  providers: [UsersService, PostsService, CustomerService, PonyService],
  //exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
