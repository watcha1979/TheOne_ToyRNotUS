import { Hello } from './hello';
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
  hello: Hello;
  title = 'app';
  firstname = 'mai';
  lastname = 'watchara';
  errorMsg: string;
  name: string;

  constructor(private personService: PersonServiceService) {

  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.persons = this.personService.getPerson();

  }
  onSubmit() {
    console.log('Form submit:' + this.name);
    this.personService.getPerson2(this.name).subscribe(
      data => this.hello = data,
      error => this.errorMsg = JSON.stringify(error));
  }

}
