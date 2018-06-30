import { Config } from "../config/Config";
import { Log } from "../log/Log";
import { MinerCreep } from "./MinerCreep";
// import { MiscCreep } from "./MiscCreep";

export class CreepHandler {
  public creep: Creep;

  constructor(creep: Creep) {
    this.creep = creep;
  }

  public run() {
    if (Config.ENABLE_DEBUG) {
      Log.info(this.creep.id + " - CreepHandler.run");
    }

    switch (Memory.creeps[this.creep.name].role) {
      case Config.CREEP_MINER:
        const controller = new MinerCreep(this.creep);
        controller.run();
        break;
      case Config.CREEP_MISC:
        // const spawn = new MiscCreep(this.creep);
        // spawn.run();
        break;
      default:
        Log.error("Unknown creep type: " + this.creep.memory.role + "(Name: " + this.creep.name + ")");
        break;
    }
  }
}
