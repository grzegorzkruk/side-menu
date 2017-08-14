import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLinks = [
    {
      label: 'Głowna',
      path: ''
    },
    {
      label: 'Zarzadzaj profilami',
      path: '/manage-profiles'
    },
    {
      label: 'Wyrazenia',
      path: '/manage-phrases'
    },
    {
      label: 'Slowa',
      path: '/manage-words'
    },
    {
      label: 'stale',
      path: '/manage-constants'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
