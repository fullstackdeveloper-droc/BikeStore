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
import { TopnavMenuComponent } from './components/topnav-menu/topnav-menu.component';
import { AppSpinnerComponent } from './components/widgets/app-spinner/app-spinner.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    TopnavMenuComponent,
    AppSpinnerComponent
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
    MatFormFieldModule 
  ],
  providers: [UsersService, PostsService, CustomerService],
  //exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
