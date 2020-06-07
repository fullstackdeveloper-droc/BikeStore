import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDashboardComponent } from './products-dashboard.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductsDashboardComponent, BrandsComponent]
})
export class ProductsDashboardModule { }
