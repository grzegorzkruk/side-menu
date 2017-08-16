import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'an-progress',
  templateUrl: './an-progress.component.html',
  styleUrls: ['./an-progress.component.css']
})
export class AnProgressComponent implements OnInit {
  @Input() value: number = 50;
  @Input() max: number = 100;

  constructor() { }

  ngOnInit() {
  }

}
