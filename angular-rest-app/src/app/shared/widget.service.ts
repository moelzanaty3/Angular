import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IWidget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  constructor(private _http: HttpClient) {}

  all() {
    return this._http.get(BASE_URL, HEADER).pipe(map(widgetsResponse => widgetsResponse));
  }
}
