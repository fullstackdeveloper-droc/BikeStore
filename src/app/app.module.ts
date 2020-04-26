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
import { CustomerDetailsComponent } from './components/customerdetails/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule  
  ],
  providers: [UsersService, PostsService, CustomerService],
  //exports: [CustomerDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
