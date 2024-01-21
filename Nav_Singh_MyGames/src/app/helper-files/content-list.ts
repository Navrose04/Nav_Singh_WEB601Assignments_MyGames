import { Content } from './content-interface';

export class GameList {
  // Private array to store game content
  private games: Content[];

  constructor() {
    // Initialize the games array to be empty
    this.games = [];
  }

  // Getter function to return the games array
  get allGames() {
    return this.games;
  }

  // Function to add a game to the games array
  addGame(game: Content) {
    this.games.push(game);
  }

  // Function to return the number of games in the array
  getGameCount() {
    return this.games.length;
  }

  htmlOutput(): string {
    let htmlString = '';
  
    for (const game of this.games) {
      htmlString += `
        <div id="${game.id}">
          <h2>${game.title}</h2>
          <img src="${game.imgURL}" alt="This is an image" />
          <p>${game.description}</p>
          <p>${game.creator}</p>
        </div>
      `;
    }
  
    return htmlString;
}
}