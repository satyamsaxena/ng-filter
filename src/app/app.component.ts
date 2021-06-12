import { Component } from '@angular/core';

import { CARS } from './cars';

interface Car {
  brand: string;
  model: string;
  year: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cars: Car[] = CARS;
  searchText: string;
}
