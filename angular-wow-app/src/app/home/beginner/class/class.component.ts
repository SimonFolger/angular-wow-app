import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  class;

  constructor(
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
    console.log(this.route.paramMap);
  }

}
