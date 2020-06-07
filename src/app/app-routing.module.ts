import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CustomerDetailsComponent } from './components/customerdetails/customer-details.component';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'products',
    loadChildren: () => import('../app/components/products-dashboard/products-dashboard.module').then(m => m.ProductsDashboardModule)
},
{ path: '',   redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
{ path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
