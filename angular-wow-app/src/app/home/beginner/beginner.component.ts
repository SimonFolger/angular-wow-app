import { Component, OnInit } from '@angular/core';
import { Class } from '../../class'
import { Http, Response, Headers }    from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css'],
  template:  `
   <h2>Welcome here niggaz</h2>
 `
})
export class BeginnerComponent implements OnInit {
  
  classes: Class[] = null;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getClasses();
  }
  
  getClasses() {
    return this.http.get('https://eu.api.battle.net/wow/data/character/classes?locale=de_DE&apikey=rzhvgu7axjcarwesheuusezw4d6jt2cu')
        .subscribe(data => {
          this.classes = data.json().classes;
          console.log(this.classes);
        })
  }



}
