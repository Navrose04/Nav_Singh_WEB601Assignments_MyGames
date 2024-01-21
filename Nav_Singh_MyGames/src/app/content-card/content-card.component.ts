import { Component } from '@angular/core';
import { GameList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  gameList: GameList = new GameList();

  constructor() {
    this.gameList.addGame({
      id: 1,
      imgURL: 'https://img.xboxachievements.com/images/monthly_2023_12/news/legofortnitekeyart_15998f33-7870-4b31-ae87-4aeec016c23f.jpg',
      title: 'Fortnite',
      description: 'Battle Royale Game',
      creator: 'Epic Games',
      type: 'Game'
    });

    this.gameList.addGame({
      id: 2,
      imgURL: 'https://wallpapers.com/images/featured/clash-royale-67pap6bmkrprchab.jpg',
      title: 'Clash Royale',
      description: 'Real-time strategy game',
      creator: 'Supercell',
      type: 'Game'
    });

    this.gameList.addGame({
      id: 3,
      imgURL: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg',
      title: 'Call of Duty',
      description: 'First-person shooter game/Battle Royale Game',
      creator: 'Activision',
      type: 'Game'
    });
  }
}
