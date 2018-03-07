/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonServiceService } from './person-service.service';

describe('Service: PersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonServiceService]
    });
  });

  it('should ...', inject([PersonServiceService], (service: PersonServiceService) => {
    expect(service).toBeTruthy();
  }));
});