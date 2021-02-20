export enum ResponseStatus {
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"
}

export type KnkBoolean = 1 | 0;

export interface DateCreated {
    date: string;
    timezone_type: number;
    timezone: string;
}
