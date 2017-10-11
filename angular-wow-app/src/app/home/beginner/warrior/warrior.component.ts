import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.css'],
  template:  `
    <router-outlet></router-outlet>
  `
})
export class WarriorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
