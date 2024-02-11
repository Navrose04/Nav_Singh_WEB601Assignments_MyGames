import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentFilterPipe} from '../content-filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentFilterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
  // Array to hold content data
  gameList: Content[];
  // Variable to store search input
  searchTitle = '';
  // Variable to track search result
  contentFound = false;
  // Variable to display search result message
  searchResult = '';
  // Variable to store category flags
  isFirst: any;
  // Arrays to store filtered content based on categories
  gameItems: Content[] = [];
  battleItems: Content[] = [];
  noneItems: Content[] = [];
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
    type: '',
    tags: ['MindGame', 'Action', 'Stratergy']
  },
  {
    id: 3,
    title: 'Minecraft',
    description: 'A sandbox video game by Mojang Studios',
    creator: 'Markus Persson',
    imgURL: '',
    type: 'Game',
    tags: ['Sandbox', 'Survival', 'Building']
  },
  {
    id: 4,
    title: 'Call of Duty',
    description: 'First-person shooter game/Battle Royale Game',
    creator: 'Activision',
    imgURL: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg',
    type: 'Battle',
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
    type: '',
    tags: ['Platformer', 'Battle Royale', 'Multiplayer']
  },
  
  {
    id: 7,
    title: 'Counter-Strike: Global Offensive',
    description: 'Multiplayer tactical first-person shooter',
    creator: 'Valve Corporation',
    imgURL: 'https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6',
    type: 'Battle',
    tags: ['First Person', 'Battle Royale', 'Multiplayer']
  }
  
];
// Filtering content based on categories
this.gameItems = this.gameList.filter(item => item.type === 'Game');
    this.battleItems = this.gameList.filter(item => item.type === 'Battle');
    this.noneItems = this.gameList.filter(item => !item.type);
}
 // Function to handle search functionality
searchContent() {
    // Check if item with the provided title exists in the list
  const foundItem = this.gameList.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
  // Set content found flag based on search result
  this.contentFound = this.gameList.some(item => item.title === this.searchTitle);
  // Set search result message based on search outcome
  this.searchResult = this.contentFound ? 'Content found!' : 'Content not found.';
}
}