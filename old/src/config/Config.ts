import { LogLevels } from "../log/LogLevels";

export class Config {
    /**
     * Enable this if you want a lot of text to be logged to console.
     * @type {boolean}
     */
    public static readonly ENABLE_DEBUG: boolean = true;

    /**
     * Enable this to use the experimental PathFinder class.
     */
    public static readonly USE_PATHFINDER: boolean = true;

    /**
     * Minimum number of ticksToLive for a Creep before they go to renew.
     * @type {number}
     */
    public static readonly DEFAULT_MIN_LIFE_BEFORE_NEEDS_REFILL: number = 700;

    /**
     * Target number to refill a Creep's ticksToLive to.
     * @type {number}
     */
    public static readonly DEFAULT_REFILL_LIFE_TO: number = 1400;

    /**
     * Debug level for log output
     */
    // public static readonly LOG_LEVEL: number = LogLevels.ERROR;
    // public static readonly LOG_LEVEL: number = LogLevels.WARNING;
    public static readonly LOG_LEVEL: number = LogLevels.INFO;
    // public static readonly LOG_LEVEL: number = LogLevels.DEBUG;

    /**
     * Prepend log output with current tick number.
     */
    public static readonly LOG_PRINT_TICK: boolean = true;

    /**
     * Prepend log output with source line.
     */
    public static readonly LOG_PRINT_LINES: boolean = true;

    /**
     * Load source maps and resolve source lines back to typeascript.
     */
    public static readonly LOG_LOAD_SOURCE_MAP: boolean = true;

    /**
     * Maximum padding for source links (for aligning log output).
     */
    public static readonly LOG_MAX_PAD: number = 100;

    /**
     * VSC location, used to create links back to source.
     * Repo and revision are filled in at build time for git repositories.
     */
    public static readonly LOG_VSC = { repo: "@@_repo_@@", revision: "@@_revision_@@", valid: false };

    /**
     * URL template for VSC links, this one works for github and gitlab.
     */
    public static readonly LOG_VSC_URL_TEMPLATE = (path: string, line: string) => {
        return `${Config.LOG_VSC.repo}/blob/${Config.LOG_VSC.revision}/${path}#${line}`;
    }

    public static readonly CREEP_MINER = "cmnr";
    public static readonly CREEP_MISC = "cmsc";
    public static readonly CREEP_UNKNOWN = "cunkwn";
    public static readonly ROOM_FRIENDLY_CITY = "rfrndlycty";
    public static readonly ROOM_FRIENDLY_COLONY = "rfrndlyclny";
    public static readonly ROOM_ENEMY_CITY = "renmycty";
    public static readonly ROOM_ENEMY_COLONY = "renmyclny";
    public static readonly ROOM_NEUTRAL = "rntrl";
    public static readonly ROOM_UNKNOWN = "runkwn";
}
