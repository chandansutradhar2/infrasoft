import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-com';

  search: string = 'Search By Category';

  constructor() {}

  setSearchString() {
    //todo go to db , and generate sreahc placeholder
    this.search = 'Got from Server';
  }
}
