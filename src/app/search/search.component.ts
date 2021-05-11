import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nga-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  categories: string[] = ["one", "two", "three"];

  constructor() { }

  ngOnInit(): void {
  }

}
