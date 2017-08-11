import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'an-btn-burger',
  templateUrl: './an-btn-burger.component.html',
  styleUrls: ['./an-btn-burger.component.css']
})
export class AnBtnBurgerComponent implements OnInit {

  @Input('toggled') toggled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
