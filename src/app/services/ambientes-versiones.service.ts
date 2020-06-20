import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { AmbienteVersion } from '../components/catalogs/ambientes-versiones/ambiente-version';

@Injectable({
    providedIn: 'root'
  })
  export class AmbientesVersionesService extends CrudService<AmbienteVersion> {
  
    constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
      let base_api = 'ambientes-versiones';
      super(_http, _errorHandler, base_api);
    }
  
  }