import { Config } from "../config/Config";
import { Log } from "../log/Log";
import { MyGame } from "./MyGame";

export class GameHandler {
  public readonly game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public run() {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - GameHandler.run");
    }

    this.processMyGame(this.game);
  }

  private processMyGame(game: Game) {
    const myGame = new MyGame(game);
    myGame.run();
  }
}
