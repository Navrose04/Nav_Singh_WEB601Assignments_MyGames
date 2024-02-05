import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from "../content-card/content-card.component";

@Component({
    selector: 'app-content-list',
    standalone: true,
    templateUrl: './content-list.component.html',
    styleUrl: './content-list.component.scss',
    imports: [CommonModule, ContentCardComponent]
})
export class ContentListComponent implements OnInit{
  gameList:Content[];
  searchTitle = '';
  contentFound = false;
  searchResult = '';
  isFirst: any;

constructor(){
this.gameList=[];

}
ngOnInit(): void {
  this.gameList = [
  {
    id: 1,
    title: 'Fortnite',
    description: 'Battle Royale Game',
    creator: 'Epic Games',
    imgURL: 'https://img.xboxachievements.com/images/monthly_2023_12/news/legofortnitekeyart_15998f33-7870-4b31-ae87-4aeec016c23f.jpg',
    type: 'Game',
    tags: ['Fun', 'PvP', 'Survivl']
  },
  {
    id: 2,
    title: 'Clash Royale',
    description: 'Real-time strategy game',
    creator: 'Supercell',
    imgURL: 'https://wallpapers.com/images/featured/clash-royale-67pap6bmkrprchab.jpg',
    type: 'Game',
    tags: ['MindGame', 'Action', 'Stratergy']
  },
  {
    id: 3,
    title: 'Minecraft',
    description: 'A sandbox video game by Mojang Studios',
    creator: 'Markus Persson',
    imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png',
    type: 'Game',
    tags: ['Sandbox', 'Survival', 'Building']
  },
  {
    id: 4,
    title: 'Call of Duty',
    description: 'First-person shooter game/Battle Royale Game',
    creator: 'Activision',
    imgURL: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg',
    type: 'Game',
    tags: ['Realistic', 'PvP', 'Stratergy']
  },
  {
    id: 5,
    title: 'Grand Theft Auto V',
    description: 'An action-adventure game by Rockstar Games',
    creator: 'Rockstar',
    imgURL: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2811/x9SuHZAiRn0uJXB1IKteIgcw.png',
    type: 'Game',
    tags: ['Action', 'Adventure', 'Open World']
  },
  {
    id: 6,
    title: 'Fall Guys',
    description: 'A platformer battle royale game by Mediatonic',
    creator: 'Mediatonic',
    imgURL: 'https://cdn2.unrealengine.com/egs-fallguys-mediatonic-g1a-00-1920x1080-75b891d04ff9.jpg',
    type: 'Game',
    tags: ['Platformer', 'Battle Royale', 'Multiplayer']
  },
  
  {
    id: 7,
    title: 'Counter-Strike: Global Offensive',
    description: 'Multiplayer tactical first-person shooter',
    creator: 'Valve Corporation',
    imgURL: 'https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6',
    type: 'Game',
    tags: ['First Person', 'Battle Royale', 'Multiplayer']
  }
];

}
searchContent() {
  const foundItem = this.gameList.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
  this.contentFound = this.gameList.some(item => item.title === this.searchTitle);
  this.searchResult = this.contentFound ? 'Content found!' : 'Content not found.';
}
}