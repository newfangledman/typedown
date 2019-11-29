import { TagType } from "./types";
import { IMarkdownDocument } from "./types/interfaces";

class MarkdownDocument implements IMarkdownDocument {
    private content: string = "";
    add(...content : string[]){
        content.forEach(element => {
            this.content += element;
        })
    }
    get(): string {
        return this.content
    }
}
export class ParseElement {
    currentLine: string = "";
}
export class TagTypeToHtml {
    private readonly tagType: Map<TagType, string> = new Map<TagType, string>();
    constructor(){
        Object.keys(TagType).map(k => {
            this.tagType.set(k as TagType, TagType[k as keyof typeof TagType])
        })
    }
    public openingTag(tagType: TagType): string {
        return this.getTag(tagType, "<")
    }
    public closingTag(tagType: TagType): string {
        return this.getTag(tagType, "</")
    }
    private getTag(tagType: TagType, openingTagPattern: string): string {
        const tag = this.tagType.get(tagType)
        if(tag){
            return `<${openingTagPattern}${tag}>`
        }
        return `${openingTagPattern}p>` 
    }
}

export const t = new TagTypeToHtml()