import { Person } from './person';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonServiceService {

    constructor() { }

    public getPerson(): Person[] {
        return [{firstname: 'mai', lastname: 'watchara'},
        {firstname: 'somkiat', lastname: 'shuharit'} ];
    }
}