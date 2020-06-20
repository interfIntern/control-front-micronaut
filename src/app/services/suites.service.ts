import { Injectable, Inject, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { Suite } from '../components/catalogs/suites/suite';

@Injectable({
  providedIn: 'root'
})
export class SuitesService extends CrudService<Suite> {

  constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
    let base_api = 'suites';
    super(_http, _errorHandler, base_api);
  }

}
