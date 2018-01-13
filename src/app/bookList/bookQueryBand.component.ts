import { Component } from '@angular/core';

import { Books } from '../dataModels/DB/Books';

@Component({
    selector: 'books-queryband',
    template: `
            <form>
                <mat-form-field><input matInput placeholder="Book Title" name="bookTitle" type="text" style="width:180px;" [(ngModel)]="title"/></mat-form-field>
                <mat-form-field style="margin-left:20px;width:180px;"><input matInput placeholder="Author" name="bookAuthor" type="text" [(ngModel)]="author"/></mat-form-field>


                <mat-checkbox name="bookIn"  style="margin-left:35px;" [(ngModel)]="statusIn">Available?</mat-checkbox>

                <mat-checkbox name="bookOut" style="margin-left:35px;" [(ngModel)]="statusOut">Loaned?</mat-checkbox>
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
