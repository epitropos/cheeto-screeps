// tslint:disable-next-line:interface-name
export interface IKeyedCollection<T> {
    Add(key: string, value: T): T;
    ContainsKey(key: string): boolean;
    Count(): number;
    Item(key: string): T;
    Keys(): string[];
    Remove(key: string): T;
    Values(): T[];
}
