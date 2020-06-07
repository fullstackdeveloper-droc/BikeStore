import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-topnav-menu',
  templateUrl: './topnav-menu.component.html',
  styleUrls: ['./topnav-menu.component.css']
})


export class TopnavMenuComponent implements OnInit {
  currentView: string;
  constructor() { 
  }

  ngOnInit() {
    
  }

  setCurrentView(view: string) {
    this.currentView = view;
  }

}
