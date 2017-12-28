import { Component, AfterContentInit, ViewContainerRef } from "@angular/core";

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';

import { FourDCollection } from 'js44d';

import { BooksEx } from '../dataModels/customDataModels/BooksEx';

import { BookEditWindow } from './bookEditWindow.component';

@Component({
    moduleId: module.id,
    selector: 'book-list',
    templateUrl: 'bookList.component.html'
})

export class BookListComponent implements AfterContentInit {

    public modelDef = BooksEx; // the record datamodel to use 
    public bookList:Array<BooksEx> = [];

    constructor(private viewref: ViewContainerRef, private modalService: ModalDialogService) {}

    ngAfterContentInit() {
        //let book = new BooksEx;
        // book.getRecords(<any>{custom: 'BookCustomQuery', status:'out'}).then(list => {this.bookList = list.models});
        //book.getRecords({query: [BooksEx.ktitle+';contains;x']}).then(list => {this.bookList = list.models});
    }

    bookCover(book:BooksEx):string {
        return 'data:image/jpeg;base64,'+book.photo;
    }


    showRecord(index) {
        const rec: BooksEx = this.bookList[index];
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewref,
            context: { record: rec }
        };

        this.modalService.showModal(BookEditWindow, options);

    }

    runSearch(text) {
        let book = new BooksEx;
        // book.getRecords(<any>{custom: 'BookCustomQuery', status:'out'}).then(list => {this.bookList = list.models});
        book.getRecords({query: [BooksEx.ktitle+';contains;'+text+';OR',BooksEx.kauthor+';contains;'+text+';OR']}).then(list => {this.bookList = list.models});
       
    }
}