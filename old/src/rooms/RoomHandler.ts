import { Config } from "../config/Config";
import { Log } from "../log/Log";
import { FriendlyCityRoom } from "./FriendlyCityRoom";
// import { FriendlyColonyRoom } from "./FriendlyColonyRoom";
// import { EnemyCityRoom } from "./EnemyCityRoom";
// import { EnemyColonyRoom } from "./EnemyColonyRoom";
// import { NeutralRoom } from "./NeutralRoom";

export class RoomHandler {
  public room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  public run() {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.room.name + " - RoomHandler.run");
    }

    this.processRoom(this.room);
  }

  private determineRoomType(room: Room) {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.room.name + " - RoomHandler.determineRoomType");
    }

    let spawns = room.find(FIND_MY_SPAWNS);
    if (spawns.length > 0) {
      return Config.ROOM_FRIENDLY_CITY;
    }

    const controller = room.controller;
    if (controller && controller.my) {
      return Config.ROOM_FRIENDLY_COLONY;
    }

    spawns = this.room.find(FIND_HOSTILE_SPAWNS);
    if (spawns.length > 0) {
      return Config.ROOM_ENEMY_CITY;
    }

    if (controller && controller.owner.username !== "") {
      return Config.ROOM_ENEMY_COLONY;
    }

    return Config.ROOM_NEUTRAL;
  }

  private processRoom(room: Room) {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.room.name + " - RoomHandler.processRoom");
    }

    const roomType = this.determineRoomType(room);

    if (false) {
        // no-op
    } else if (roomType === Config.ROOM_NEUTRAL) {
      this.processNeutralRoom(room);
    } else if (roomType === Config.ROOM_ENEMY_COLONY) {
      this.processEnemyColonyRoom(room);
    } else if (roomType === Config.ROOM_ENEMY_CITY) {
      this.processEnemyCityRoom(room);
    } else if (roomType === Config.ROOM_FRIENDLY_COLONY) {
      this.processFriendlyColonyRoom(room);
    } else if (roomType === Config.ROOM_FRIENDLY_CITY) {
      this.processFriendlyCityRoom(room);
    }
  }

  private processFriendlyCityRoom(room: Room) {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.room.name + " - RoomHandler.processFriendlyCityRoom");
    }

    const friendlyCityRoom = new FriendlyCityRoom(room);
    friendlyCityRoom.run();
  }

  private processFriendlyColonyRoom(room: Room) {
  //  if (Config.ENABLE_DEBUG) {
  //    Log.info(this.room.name + " - RoomHandler.processFriendlyColonyRoom");
  //  }

  //  const friendlyColonyRoom = new FriendlyColonyRoom(room);
  //  friendlyColonyRoom.run();
  }

  private processEnemyCityRoom(room: Room) {
  //  if (Config.ENABLE_DEBUG) {
  //    Log.info(this.room.name + " - RoomHandler.processEnemyCityRoom");
  //  }

  //  const enemyCityRoom = new EnemyCityRoom(room);
  //  enemyCityRoom.run();
  }

  private processEnemyColonyRoom(room: Room) {
  //  if (Config.ENABLE_DEBUG) {
  //    Log.info(this.room.name + " - RoomHandler.processEnemyColonyRoom");
  //  }

  //  const enemyColonyRoom = new EnemyColonyRoom(room);
  //  enemyColonyRoom.run();
  }

  private processNeutralRoom(room: Room) {
  //  if (Config.ENABLE_DEBUG {
  //    Log.info(this.room.name + " - RoomHandler.processNeutralRoom");
  //  }

  //  const neutralRoom = new NeutralRoom(room);
  //  neutralRoom.run();
  }
}
