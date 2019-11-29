import { TagType } from "./types";
import { TagTypeToHtml, ParseElement } from "./parser";
import { IMarkdownDocument } from "./types/interfaces";

abstract class MarkdownVisitorBase {
    constructor(private readonly tagType: TagType, private readonly tagTypeToHtml: TagTypeToHtml){}
    visit(token: ParseElement, markdownDocument: IMarkdownDocument): void {
        markdownDocument.add(this.tagTypeToHtml.openingTag(this.tagType), token.currentLine, this.tagTypeToHtml.closingTag(this.tagType))
    }
}

export class H1Visitor extends MarkdownVisitorBase {
    constructor(){
        super(TagType.Header1, new TagTypeToHtml())
    }
}
export class H2Visitor extends MarkdownVisitorBase {
    constructor(){
        super(TagType.Header2, new TagTypeToHtml())
    }
}
export class H3Visitor extends MarkdownVisitorBase {
    constructor(){
        super(TagType.Header3, new TagTypeToHtml())
    }
}
export class ParagraphVisitor extends MarkdownVisitorBase {
    constructor(){
        super(TagType.Paragraph, new TagTypeToHtml())
    }
}
export class HorizontalRuleVisitor extends MarkdownVisitorBase {
    constructor(){
        super(TagType.HorizontalRule, new TagTypeToHtml())
    }
}
