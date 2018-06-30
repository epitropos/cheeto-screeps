import { Config } from "../config/config";
import { CreepHandler } from "../creeps/CreepHandler";
import { Log } from "../log/Log";
// import { MineralHandler } from "../minerals/MineralHandler";
// import { ResourceHandler } from "../resources/ResourceHandler";
// import { SourceHandler } from "../sources/SourceHandler";
// import { StructureHandler } from "../structures/StructureHandler";

export class FriendlyCityRoom {
  public room: Room;

  constructor(room: Room) {
    this.room = room;
  }

  public run() {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.room.name + " - FriendlyCityRoom.run");
    }

    // this.initializeMemory(this.room);
    // this.loadFromMemory(this.room);
    // this.processEnemyCreeps(this.room);
    this.processResources(this.room);
    this.processSources(this.room);
    this.processMinerals(this.room);
    this.processStructures(this.room);
    this.processCreeps(this.room);
    this.saveToMemory(this.room);
  }

  private initializeMemory(room: Room) {
    if (Config.ENABLE_DEBUG) {
      Log.info(room.name + " - FriendlyCityRoom.initializeMemory");
    }

    // this.room.memory = {};
    // this.room.memory.sources = {};
    // this.room.memory.structures = {};
  }

  private loadFromMemory(room: Room) {
//    if (Config.ENABLE_DEBUG) {
//      Log.info(room.name + " - FriendlyCityRoom.loadFromMemory");
//    }

//    // TODO: Code goes here.
  }

  private saveToMemory(room: Room) {
//    if (Config.ENABLE_DEBUG) {
//      Log.info(room.name + " - FriendlyCityRoom.saveToMemory");
//    }

//    // TODO: Code goes here.
  }

  private processCreeps(room: Room) {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.room.name + " - FriendlyCityRoom.processCreeps");
    }

    const creeps = room.find(FIND_MY_CREEPS);
    for (const creep of creeps) {
      const creepHandler = new CreepHandler(creep); // TODO: Do not need to instantiate a new handler for every creep.
      creepHandler.run();
    }
  }

  private processMinerals(room: Room) {
    // if (Config.ENABLE_DEBUG) {
    //   Log.info(this.room.name + " - FriendlyCityRoom.processMinerals");
    // }

    // let minerals = room.find<Mineral>(FIND_MINERALS);
    // for (let mineral of minerals) {
    //   let mineralHandler = new MineralHandler(mineral);
    //   mineralHandler.run();
    // }
  }

  private processResources(room: Room) {
    // if (Config.ENABLE_DEBUG) {
    //   Log.info(this.room.name + " - FriendlyCityRoom.processResources");
    // }

    // let resources = room.find<Resource>(FIND_DROPPED_RESOURCES);
    // for (let resource of resources) {
    //   let resourceHandler = new ResourceHandler(resource);
    //   resourceHandler.run();
    // }
  }

  private processSources(room: Room) {
    // if (Config.ENABLE_DEBUG) {
    //   Log.info(this.room.name + " - FriendlyCityRoom.processSources");
    // }

    // let sources = room.find<Source>(FIND_SOURCES);
    // for (let source of sources) {
    //   let sourceHandler = new SourceHandler(source);
    //   sourceHandler.run();
    // }
  }

  private processStructures(room: Room) {
    // if (Config.ENABLE_DEBUG) {
    //   Log.info(this.room.name + " - FriendlyCityRoom.processStructures");
    // }

    // let structures = room.find<Structure>(FIND_MY_STRUCTURES);
    // for (let structure of structures) {
    //   let structureHandler = new StructureHandler(structure);
    //   structureHandler.run();
    // }
  }
}
