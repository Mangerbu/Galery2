import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Photo, Results } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _hhtp: HttpClient) { }

  getPhotos() {
    return this._hhtp.get<Photo[]>(`${environment.API_URL}photos`, {
      headers: {
        Authorization: `Client-ID ${environment.CLIENT_ID}`
      }
    })
  }

  search(query: string) {
    return this._hhtp.get<Results>(`${environment.API_URL}search/photos`, {
      headers: {
        Authorization: `Client-ID ${environment.CLIENT_ID}`
      },
      params: {
        query,
        per_page: 50
      }
    })
  }
}
