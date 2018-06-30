// // type shim for nodejs' `require()` syntax
// // for stricter node.js typings, remove this and install `@types/node`
// declare const require: (module: string) => any;

// // add your custom typings here
interface CreepMemory {
  role: string;

  // Position
  positionX: number;
  positionY: number;
  roomName: string;

  // TODO: Create MinerCreepMemory and move this into it.
  // The source the creep is assigned to.
  sourceId: string;
}
