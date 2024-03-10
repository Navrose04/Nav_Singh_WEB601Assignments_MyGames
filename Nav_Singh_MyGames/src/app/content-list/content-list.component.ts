import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { gameList } from '../helper-files/contentDb';
import { GameService } from '../game.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  gameList: Content[] = gameList;
  searchTitle = '';
  contentFound = false;
  searchResult = '';
  gameItems: Content[] = [];
  battleItems: Content[] = [];
  noneItems: Content[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getContent().subscribe(gameList => {
      this.gameList = gameList;
      this.gameItems = this.gameList.filter(item => item.type === 'Game');
      this.battleItems = this.gameList.filter(item => item.type === 'Battle');
      this.noneItems = this.gameList.filter(item => !item.type);
    });
  }

  searchContent() {
    const foundItem = this.gameList.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentFound = this.gameList.some(item => item.title === this.searchTitle);
    this.searchResult = this.contentFound ? 'Content found!' : 'Content not found.';
  }
}
