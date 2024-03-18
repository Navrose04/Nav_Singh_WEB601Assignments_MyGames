import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CommonModule } from '@angular/common'
import { ContentCardComponent } from './content-card/content-card.component';
import { FormsModule } from '@angular/forms';
import { GameService } from './game.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { ContentListComponent } from "./content-list/content-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [ContentCardComponent, FormsModule, MessagesComponent, CommonModule, ContentListComponent]
})
export class AppComponent implements OnInit {
  title = 'Nav_Singh_MyGames';
  selectedGame: Content | undefined;
  games: Content[] = [];

  constructor(private gameService: GameService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.gameService.getContent().subscribe(games => {
      this.games = games;
      this.messageService.add('All games loaded');
    });

    this.gameService.getContentById(2).subscribe(game => {
      this.selectedGame = game;
      this.messageService.add(`Content Item at id: ${game?.id}`);
      this.games = [game, ...this.games.filter(g => g.id !== game.id)];
    });
  }
}
