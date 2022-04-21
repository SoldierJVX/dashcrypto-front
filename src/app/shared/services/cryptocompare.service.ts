import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class CryptoCompareService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
    ) { }

    public getCryptoList() {
        return this.httpClient.get<string[]>('http://localhost:8080/dashboard/listcrypto');
    }

}