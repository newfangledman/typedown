import { ParseElement } from "../parser";

export interface IMarkdownDocument {
    add(...content: string[]): void;
    get(): string 
}

export interface IMarkdownVisitor {
    visit(token: ParseElement, markdowDocument: IMarkdownDocument): void;
}

export interface IMarkdownVisitable {
    accept(visitor: IMarkdownVisitor, token: ParseElement, markdowDocument: IMarkdownDocument): void
}