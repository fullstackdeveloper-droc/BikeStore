import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './components/customerdetails/customer-details.component';
import { ProductsComponent } from './components/products/products.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'customers', component: CustomerDetailsComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
