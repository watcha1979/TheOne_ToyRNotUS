import { Hello } from './hello';
import { environment } from './../environments/environment';
import { Person } from './person';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonServiceService {

    constructor(private http: HttpClient) { }

    public getPerson(): Person[] {
        return [{id: 1, name: 'watchara'},
        {id: 2, name: 'shuharit'} ];
    }

    public getPerson2(param: string): Observable<Hello> {
        return this.http.get<Hello>(environment.apiurl + '/' + param);
    }
}