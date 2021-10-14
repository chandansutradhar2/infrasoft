import { Component, Input, OnInit } from '@angular/core';
import { NavMenu } from '../models/menu.model';

@Component({
  selector: 'cn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  @Input() categories: NavMenu[];
  constructor() {
    this.categories = [];
  }

  ngOnInit(): void {
    console.log(this.categories);
  }
}
