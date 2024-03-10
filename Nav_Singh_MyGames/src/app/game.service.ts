import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { gameList } from './helper-files/contentDb';
import { Content } from './helper-files/content-interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    constructor(private messageService: MessageService) { }

    getContent(): Observable<Content[]> {
      this.messageService.add('Content array loaded!');
      return of(gameList);
    }
    
    getContentById(id: number): Observable<Content> {
      const content = gameList.find(item => item.id === id);
      if (content) {
        this.messageService.add(`Content Item at id: ${id}`);
        return of(content);
      } else {
        throw new Error('Content not found');
      }
    }
}