import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers }    from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {

  data;

  constructor(private http: Http) { }

  ngOnInit() {
    this.getTalents();
  }

  getTalents() {
    return this.http.get('https://eu.api.battle.net/wow/data/talents?locale=en_GB&apikey=rzhvgu7axjcarwesheuusezw4d6jt2cu')
        .subscribe(data => {
          this.data = data.json();
          console.log(this.data);
        });
  }
}
