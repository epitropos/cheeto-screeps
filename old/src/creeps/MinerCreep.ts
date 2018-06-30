import { Config } from "../config/config";
import { Log } from "../log/Log";

export class MinerCreep {
  public static MinimumEnergyRequired = 150;

  public static getBodyParts(energyAvailable: number) {
    if (energyAvailable < MinerCreep.MinimumEnergyRequired) {
      return undefined;
    }

    const bodyParts: string[] = [WORK, MOVE];
    const bodySegmentSize = 100;

    let bodyPartsSize = 50 + 100;
    const bodyPartsSizeMax = 50 + 100 + 100 + 100 + 100 + 100;

    while (bodyPartsSize + bodySegmentSize <= energyAvailable && bodyPartsSize < bodyPartsSizeMax) {
      bodyParts.push(WORK);
      bodyPartsSize += bodySegmentSize;
    }

    // TODO: Move function into CreepSupport.
    return _.sortBy(bodyParts, (bodyPart: string) => {
      switch (bodyPart) {
        case CARRY: return 3;
        case MOVE: return 4;
        case WORK: return 2;
        case TOUGH: return 1;
        default: return 99;
      }
    });
  }

  public creep: Creep;
  public position: RoomPosition = new RoomPosition(0, 0, "");
  public source: Source = new Source("");
  public sourceId: string = "";

  private debug: boolean = false;

  constructor(creep: Creep) {
    this.creep = creep;
  }

  public run() {
    if (this.debug) {
      Log.info(this.creep.room.name + ":" + this.creep.name + " - MinerCreep.run");
    }

    this.initializeMemory();
    this.loadFromMemory();

    // TODO: Check TTL and issue clone message.

    if (this.creep.pos.inRangeTo(this.source.pos, 1)) {
      this.creep.harvest(this.source);
      return;
    }

    if (!this.creep.pos.inRangeTo(this.position, 0)) {
      this.creep.moveTo(this.position); // TODO: Use a better/cheaper pathing algorithm.
      return;
    }

    this.saveToMemory();
  }

  private initializeMemory() {
    // TODO: Code goes here.
  }

  private loadFromMemory() {
    // Primary data.
    this.sourceId = this.creep.memory.sourceId;
    const positionX = this.creep.memory.positionX;
    const positionY = this.creep.memory.positionY;
    const roomName = this.creep.memory.roomName;

    // Derived data.
    this.source = Game.getObjectById(this.sourceId) as Source;
    this.position = new RoomPosition(positionX, positionY, roomName);
  }

  private saveToMemory() {
    // TODO: Code goes here.
  }
}
