import { Log } from "../log/Log";
import { IKeyedCollection } from "./IKeyedCollection";

export class KeyedCollection<T> implements IKeyedCollection<T> {
    private items: { [index: string]: T} = {};
    private count: number = 0;

    public constructor(items: { [key: string]: T }) {
        for (const i in items) {
            Log.info("")
        }
        this.items = items;
    }

    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public Count(): number {
        return this.count;
    }

    // TODO: Fix this. It is a destructive add.
    public Add(key: string, value: T) {
        if (!this.ContainsKey(key)) {
            this.count++;
        }

        this.items[key] = value;
        return this.items[key];
    }

    public Remove(key: string) {
        const val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }

    public Item(key: string): T {
        // TODO: What if the item does not exist?
        return this.items[key];
    }

    public Keys(): string[] {
        const keySet: string[] = [];
        for (const prop in this.items) {
            // TODO: This seems redundent since we just got the prop from this.items
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }

    public Values(): T[] {
        const values: T[] = [];
        for (const prop in this.items) {
            // TODO: This seems redundent since we just got the prop from this.items
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    }
}
