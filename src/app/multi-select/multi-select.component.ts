import { Select } from './model/select';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'an-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  searchValue: string;
  listOpen: boolean = false;
  searchListOpen: boolean = false;
  selected: Select;
  options: Select[];
  @Input() placeholder: string = "Wybierz z listy";

  constructor() { }

  ngOnInit() {
  }

  OpenSelect(){
    this.listOpen = true;
  }

  CloseSelect(){
    this.listOpen = false;
  }

  ToggleSelect(){
    this.listOpen = !this.listOpen;
  }

  DoSelect(index){
    this.selected = this.options[index];
  }

  DoSearch(element){
    console.log(element.value);
    if ('' === element.value){
      this.CloseSelect();
      this.searchListOpen = false;
      this.searchValue = '';
    } else {
      this.OpenSelect()
      this.searchListOpen = true;
      this.searchValue = element.value;
    }
  }

}
