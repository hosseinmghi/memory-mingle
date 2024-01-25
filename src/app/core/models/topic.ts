import { GUID } from "../types/guid";

export interface Topic {
    id: GUID;
    name: string;
    scopeId: GUID;
}