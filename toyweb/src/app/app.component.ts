import { PersonServiceService } from './person-service.service';
import { Person } from './person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  persons: Person[];
  title = 'app';
  firstname = 'mai';
  lastname = 'watchara';

  constructor(private personService: PersonServiceService ) {

  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.persons = this.personService.getPerson();
  }

}
