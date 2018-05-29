import { Config } from "../config/Config";
import { Log } from "../log/Log";
import { RoomHandler } from "../rooms/RoomHandler";
import { KeyedCollection } from "../utils/KeyedCollection";

export class MyGame {
  public game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  public run() {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - MyGame.run");
    }

    this.initializeMemory(this.game);
    this.loadFromMemory(this.game);
    const rooms = new KeyedCollection<Room>(this.game.rooms);
    for (const roomName in rooms.Keys) {
      Log.info("Room3: " + roomName);
    }
    this.processRooms(new KeyedCollection<Room>(this.game.rooms));
    this.deleteDeadCreeps(this.game, Memory);
    this.saveToMemory(this.game);
    this.displayCpuUsage(this.game.cpu);
  }

  private initializeMemory(game: Game) {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - MyGame.initializeMemory");
    }

    // TODO: Code goes here.
  }

  private loadFromMemory(game: Game) {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - MyGame.loadFromMemory");
    }

    // TODO: Code goes here.
  }

  private saveToMemory(game: Game) {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - MyGame.saveToMemory");
    }

    // TODO: Code goes here.
  }

  // TODO: Consider moving this to the CreepHandler.
  private deleteDeadCreeps(game: Game, memory: Memory) {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - MyGame.deleteDeadCreeps");
    }

    for (const i in memory.creeps) {
      if (!game.creeps[i]) {
          delete memory.creeps[i];
      }
    }
  }

  // TODO: Consider moving this to a report/audit/profiling handler.
  private displayCpuUsage(cpu: CPU) {
    Log.info("CPU used: " + _.round(cpu.getUsed(), 1)
    + " | Bucket: " + cpu.bucket
    + " | Limit: " + cpu.limit
    + " | TickLimit: " + cpu.tickLimit);
  }

  private processRooms(rooms: KeyedCollection<Room>) {
    if (Config.ENABLE_DEBUG) {
      Log.info("CHEETO - MyGame.processRooms");
    }

    Log.info("CHEETO - rooms: " + rooms.Count());
    for (const roomName in rooms.Keys) {
      const room = rooms.Item(roomName);
      if (room !== undefined) {
        this.processRoom(room);
      }
    }
  }

  private processRoom(room: Room) {
    const roomHandler = new RoomHandler(room);
    roomHandler.run();
  }
}
