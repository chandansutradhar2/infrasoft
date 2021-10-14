import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-com';

  search: string = 'Search By Category';

  imgSrc = environment.logo;
  constructor(private http: HttpClient) {}

  setSearchString() {
    //todo go to db , and generate sreahc placeholder

    this.http.post(environment.apiUrl, {}).subscribe((r) => {});

    this.search = 'Got from Server';
  }
}
