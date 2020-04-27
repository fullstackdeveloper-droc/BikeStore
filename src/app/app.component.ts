import { Component, OnInit } from '@angular/core';
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { CustomerService } from './services/customer.service';
import { CustomerDetailsComponent } from './components/customerdetails/customer-details.component';
import { TopnavMenuComponent } from './components/topnav-menu/topnav-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'technical-assessment';
  /*   users: any[] = [];
    posts: any[] = [];*/
    customers: any[] = []; 
  user: string;
  currentView: string;
  constructor(private _postService: PostsService, private _usersService: UsersService, private _customerService: CustomerService) {


  }

  ngOnInit() {
    /*     this.getUsers();
        this.getPosts();
        this.getUser(1); */
        //this.getCustomers();
  }

  setCurrentView(view: string) {
    this.currentView = view;
  }

  /*  getUsers() {
     this._usersService.getUsers().subscribe((data)=>{
       console.log(data);
       this.users = data;
     });
   }
 
   getPosts() {
     this._postService.getPosts().subscribe((data)=>{
       console.log(data);
       this.posts = data;
     });
   }
 
   getCustomers() {
     this._customerService.getCustomers().subscribe((data)=>{
       console.log(data);
       this.customers = data;
     });
   }
 
   getUser(id: number) {
     this._usersService.getUser(id).subscribe((data)=>{
       console.log(data);
       this.user = data;
     });
   } */
}
