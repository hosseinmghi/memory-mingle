import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '../models/word';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl: string = "http://localhost:6001/words";

  constructor(private httpClient: HttpClient) { }

  addWord(word: Word): Observable<any> {
    return this.httpClient.post(this.apiUrl, word);
  }
}
