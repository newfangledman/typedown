export interface IMarkdownDocument {
    add(...content: string[]): void;
    get(): string 
}