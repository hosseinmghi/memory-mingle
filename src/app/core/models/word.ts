import { GUID } from "../types/guid";

export interface Word {
    id: GUID;
    topicId: GUID;
    word: string;
    definition: string;
}   