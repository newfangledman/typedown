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
export class HtmlHandler {
    public textChangeHandler() : void {

    }
}