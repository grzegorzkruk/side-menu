import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-side-menu-layout',
  templateUrl: './an-side-menu.component.html',
  styleUrls: ['./an-side-menu.component.css']
})
export class AnSideMenuComponent implements OnInit {
  menuOpen: boolean;

  constructor() { }

  togglePanel(){
    this.menuOpen = !this.menuOpen
  }

  ngOnInit() {
  }

}
