import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_API_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})

export class HttpReqService {
  constructor(private http: HttpClient) { }

  requestGet(address) {
    return this.http.get(BASE_API_URL + address);
  }

  requestPost(address, inputField, textName) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({ fileName: inputField, textField: textName });
    return this.http.post(BASE_API_URL + address, json, { headers: header });
  }
}
