import { Version } from '../components/catalogs/versiones/version';
import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { HttpClient } from '@angular/common/http/http';

@Injectable({
    providedIn: 'root'
  })
  export class VersionesService extends CrudService<Version> {
  
    constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
      let base_api = 'versiones';
      super(_http, _errorHandler, base_api);
    }
  
  }