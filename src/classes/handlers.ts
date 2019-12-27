import { ParseElement } from "./parser";
import { IMarkdownVisitable, IMarkdownDocument, IMarkdownVisitor } from "./types/interfaces";
import {MarkdownVisitable} from "./visitors"

abstract class Handler<T>{
    protected next: Handler<T> | null = null;
    public setNext(next: Handler<T>): void{
        this.next = next
    }
    public handleRequest(request: T){
        if(!this.canHandle(request)){
            if(this.next){
                this.next.handleRequest(request)
            }
            return;
        }
    }
    protected abstract canHandle(request: T): boolean
}
export class ParseChainHandler extends Handler<ParseElement>{
    private readonly visitable: IMarkdownVisitable = new MarkdownVisitable();
    constructor(private readonly document: IMarkdownDocument, 
        private readonly tagType: string, 
        private readonly visitor: IMarkdownVisitor){
        super()
    }
}
export class HtmlHandler {
    public textChangeHandler() : void {

    }
}