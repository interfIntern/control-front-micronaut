import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './handle-error.service';
import { CrudService } from './crud-service';
import { TiposEventosFolios } from '../components/catalogs/tipos-eventos-folios/tipos-eventos-folios';

@Injectable({
  providedIn: 'root'
})
export class TiposEventosFoliosService extends CrudService<TiposEventosFolios> {
 
  constructor(_http: HttpClient, _errorHandler: HttpErrorHandler) {
    let base_api = 'tipo-evento-folio';
    super(_http, _errorHandler, base_api);
  }
  
}
