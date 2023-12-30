import { GUID } from "../types/guid";

export interface Word {
    id: GUID;
    word: string;
    definition: string;
}   