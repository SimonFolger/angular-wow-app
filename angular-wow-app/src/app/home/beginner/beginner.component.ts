import { Component, OnInit } from '@angular/core';
import { Class } from '../../class';
import { Http, Response, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent implements OnInit {

  filePath:string = "test";

  classes: Class[] = null;

  constructor(
      private router: Router, private http: Http
  ) {}

  ngOnInit() {
    this.getClasses();
  }

  navigateToClassDetail(selectedClass: Class) {
    this.router.navigate(['/beginner/class', selectedClass.id]);
  }

  getImagePath(name: string) {
    return "../../assets/icons/" + name.toLowerCase() + ".png";
  }

  getClasses() {
    return this.http.get('https://eu.api.battle.net/wow/data/character/classes?locale=en_GB&apikey=rzhvgu7axjcarwesheuusezw4d6jt2cu')
        .subscribe(data => {
          this.classes = data.json().classes;
        });
  }



}
