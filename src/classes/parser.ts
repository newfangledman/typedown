import { TagType } from "./types";

export class TagTypeToHTML {
    private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
    constructor(){
        Object.keys(TagType).map(k => {
            this.tagType.set(k as TagType, TagType[k as keyof typeof TagType])
        })
    }
}

export const t = new TagTypeToHTML()