import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '../models/word';
import { Observable } from 'rxjs';
import { GUID } from '../types/guid';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private apiUrl: string = "http://localhost:6001/words";

  constructor(private httpClient: HttpClient) { }

  addWord(word: Word): Observable<any> {
    return this.httpClient.post(this.apiUrl, word);
  }

  getWords(topidId: GUID): Observable<Word[]> {
    return this.httpClient.get<Word[]>(`${this.apiUrl}?topicId=${topidId}`);
  }
}
