import { Ambiente } from '../components/catalogs/ambientes/ambiente';
import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class AmbientesService extends CrudService<Ambiente> {
  
    constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
      let base_api = 'ambientes';
      super(_http, _errorHandler, base_api);
    }
  
  }