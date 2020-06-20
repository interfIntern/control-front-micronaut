import { environment } from "src/environments/environment";
import { HandleError, HttpErrorHandler } from "./handle-error.service";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

export abstract class CrudService<T> {
  apiUrl = environment.API_URL;
  private handleError: HandleError;

  constructor(
    protected _http: HttpClient,
    private httpErrorHandler: HttpErrorHandler,
    protected _apiContext: string
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('CrudService');
  }

  getAll(): Observable<T[]> {
    return this._http.get<any[]>(this.apiUrl + this._apiContext)
      .pipe(
        catchError(this.handleError('getAll', []))
      );
  }

  add(obj: T): Observable<T> {
    return this._http.post<T>(this.apiUrl + this._apiContext, obj, httpOptions)
      .pipe(
        catchError(this.handleError('add', obj))
      );
  }

  update(obj: T): Observable<T> {
    return this._http.put<T>(this.apiUrl + this._apiContext, obj, httpOptions)
      .pipe(
        catchError(this.handleError('update', obj))
      );
  }

  delete(id: number): Observable<Object> {
    return this._http.delete(this.apiUrl + this._apiContext + "/" + id)
      .pipe(
        catchError(this.handleError('delete', id))
      );
  }
}