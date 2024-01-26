import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Scope } from '../models/scope';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  private apiUrl: string = "http://localhost:6001/scopes";

  constructor(private httpClient: HttpClient) { }

  getScopes(): Observable<Scope[]> {
    return this.httpClient.get<Scope[]>(this.apiUrl);
  }
}
