import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Aplicativo } from '../components/catalogs/aplicativos/aplicativo';

@Injectable({
    providedIn: 'root'
  })
  export class AplicativosService extends CrudService<Aplicativo> {
  
    constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
      let base_api = 'aplicativos';
      super(_http, _errorHandler, base_api);
    }
  
  }