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

  getGameDetails(index: number) {
    const game = this.games[index];
    if (!game) {
      return 'no game is found in this index.';
    }
    let output = `<h2>${game.title}</h2>
                  <p>${game.description}</p>
                  <p>Created by: ${game.creator}</p>`;
    // Check if imgURL is present and generate an image tag
    if (game.imgURL) {
      output += `<img src="${game.imgURL}" alt="${game.title}">`;
    }
    // Check if type is present and add it to the output
    if (game.type) {
      output += `<p>Type: ${game.type}</p>`;
    }
    return output;
  }
}
