import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpErrorHandler } from './handle-error.service';
import { HttpClient } from '@angular/common/http';
import { Server } from '../components/catalogs/servers/server';

@Injectable({
    providedIn: 'root'
  })
  export class ServersService extends CrudService<Server> {
  
    constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
      let base_api = 'servers';
      super(_http, _errorHandler, base_api);
    }
  
  }