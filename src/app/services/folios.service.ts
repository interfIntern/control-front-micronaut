import { Injectable } from '@angular/core';
import { CrudService } from './crud-service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from './handle-error.service';
import { Folio } from '../components/catalogs/folios/folio';

@Injectable({
  providedIn: 'root'
})
export class FoliosService extends CrudService<Folio>{

  constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
    let base_api = 'folios';
    super(_http, _errorHandler, base_api);
  }

}
