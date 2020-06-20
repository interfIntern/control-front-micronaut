import { TestBed, async, inject } from '@angular/core/testing';

import { SuitesService } from './suites.service';
import { HttpErrorHandler } from './handle-error.service';
import { MessageService } from './message.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('SuitesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: SuitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuitesService, HttpErrorHandler, MessageService],
      imports: [HttpClientTestingModule]
    });

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SuitesService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable',
    () => {
      service.getAll().subscribe(data => {
        expect(data.length).toEqual(0, 'Trae un registro'),
          fail
      });

      const req = httpTestingController.expectOne(service.apiUrl);
      req.flush([]); //Return empty data
    });
});
