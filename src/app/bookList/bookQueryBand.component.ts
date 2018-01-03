import { Component } from '@angular/core';

import { Books } from '../dataModels/DB/Books';

@Component({
    selector: 'books-queryband',
    template: `
            <form>
                <label class="fieldPrompt" for="bookTitle" style="margin-right:5px;">Book Title</label>
                <input name="bookTitle" type="text" class="fieldEntry"  style="width:180px;height:20px;" [(ngModel)]="title"/>
                <label class="fieldPrompt" for="bookAuthor" style="margin-right:5px;margin-left:10px;">Author</label>
                <input name="bookAuthor" type="text" class="fieldEntry"  style="width:180px;height:20px;" [(ngModel)]="author"/>
                <input name="bookIn" type="checkbox" class="fieldEntry"  style="margin-right:2px;margin-left:35px;" [(ngModel)]="statusIn"/>
                <label class="fieldPrompt" for="bookIn">Available?</label>
                <input name="bookOut" type="checkbox" class="fieldEntry"  style="margin-right:2px;margin-left:15px;" [(ngModel)]="statusOut"/>
                <label class="fieldPrompt" for="bookOut" >Loaned?</label>
            </form>
`
})


export class BooksQueryBand {
    //
    // declare quey band fields
    //
    public title: string = '';
    public author: string = '';
    private _statusIn:boolean = false;
    public get statusIn():boolean {return this._statusIn;}
    public set statusIn(v:boolean) {this._statusIn = v; if (v) this._statusOut = false;}
    private _statusOut:boolean = false;
    public get statusOut():boolean {return this._statusOut;}
    public set statusOut(v:boolean) {this._statusOut = v; if (v) this._statusIn = false;}

      
    //
    // build 4C-TV query based on items from query band
    //
    public get currentQuery(): Object {
        let query:any;

         // Query based on Book title
        if (this.title && this.title !== '') {
            query = {query:[Books.ktitle+ ';contains;' + this.title + ';AND']};
        }

         // Query based on Book author
        if (this.author && this.author !== '') {
            let queryItem = Books.kauthor+ ';contains;' + this.author + ';AND';
            (query)?query.query.push(queryItem):query = {query:[queryItem]};
        }
         
        // Query for Books available or not
        if (this.statusIn || this.statusOut) {
            let statusQuery = {custom: 'BookCustomQuery', status:(this.statusIn)?'in':'out'};
            query =(query)?{intersection:[query, statusQuery]}:statusQuery;
        }

        return query;

    }
}
