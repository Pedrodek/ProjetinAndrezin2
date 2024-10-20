import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseApi } from '../models/response.api';

// interface RequestOptions {
//   headers?: HttpHeaders | {
//     [header: string]: string | string[];
//   };
//   observe?: 'body';
//   params?: HttpParams | {
//     [param: string]: string | string[];
//   };
//   reportProgress?: boolean;
//   responseType?: 'json';
//   withCredentials?: boolean;
// }

@Injectable()
export class ApiService {
  constructor(protected http: HttpClient, @Inject('PLATFORM_API_URL') public baseUrl: string) {
    //console.log(baseUrl);
  }

  
}
