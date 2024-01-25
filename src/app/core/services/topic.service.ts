import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic';
import { GUID } from '../types/guid';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl: string = "http://localhost:6001/topics";

  constructor(private httpclient: HttpClient) { }

  getTopics(scopeId: GUID): Observable<Topic[]> {
    return this.httpclient.get<Topic[]>(`${this.apiUrl}?scopeId=${scopeId}`);
  }

  addTopic(topic: Topic): Observable<any> {
    return this.httpclient.post(`${this.apiUrl}?scopeId=${topic.scopeId}`, topic);
  }
}
