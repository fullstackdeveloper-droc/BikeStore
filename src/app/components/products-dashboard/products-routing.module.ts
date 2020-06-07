import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsDashboardComponent } from './products-dashboard.component';
import { BrandsComponent } from './brands/brands.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsDashboardComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
