import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IWidget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  constructor(private _http: HttpClient) {}

  getAllWidgets() {
    return this._http.get<IWidget[]>(BASE_URL).pipe(map(widgets => widgets));
  }
  getWidgetById(id: number) {
    return this._http.get(`${BASE_URL}/${id}`).pipe(map(widgets => widgets));
  }
  create(widegt: IWidget) {
    if (!widegt.id) {
      return this._http
        .post(`${BASE_URL}`, JSON.stringify(widegt), HEADER)
        .pipe(map(widgets => widgets));
    }
    return null;
  }
  update(widget: IWidget) {
    return this._http
      .patch(`${BASE_URL}/${widget.id}`, JSON.stringify(widget), HEADER)
      .pipe(map(widgets => widgets));
  }
  delete(widget: IWidget) {
    if (widget.id) {
      return this._http
        .delete(`${BASE_URL}/${widget.id}`)
        .pipe(map(widgets => widgets));
    }
  }
  search(term: string) {
    const search = new URLSearchParams();
    search.set('q', term);
    return this._http
      .get(`${BASE_URL}/${search}`)
      .pipe(map(widgets => widgets));
  }
}
