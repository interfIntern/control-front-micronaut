import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Lider } from '../components/catalogs/lideres/lider';

@Injectable({
    providedIn: 'root'
  })
  export class LideresService extends CrudService<Lider> {
  
    constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
      let base_api = 'lideres';
      super(_http, _errorHandler, base_api);
    }
  
  }