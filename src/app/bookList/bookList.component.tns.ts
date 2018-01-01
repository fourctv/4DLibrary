import { Component, ViewContainerRef } from "@angular/core";

import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { View } from 'tns-core-modules/ui/core/view';
import { SwipeGestureEventData, SwipeDirection } from 'tns-core-modules/ui/gestures';
import * as dialog from "tns-core-modules/ui/dialogs";

import { FourDCollection } from 'js44d';

import { BooksEx } from '../dataModels/customDataModels/BooksEx';
import { Loans } from '../dataModels/DB/Loans';
import { Students } from '../dataModels/DB/Students';

import { BookEditWindow } from './bookEditWindow.component';
import { StudentSelector } from '../studentList/studentSelector.modal';


@Component({
    moduleId: module.id,
    selector: 'book-list',
    templateUrl: 'bookList.component.html'
})

export class BookListComponent {

    public modelDef = BooksEx; // the record datamodel to use 
    public bookList: Array<BooksEx> = [];

    private swipedItem: View;
    private lastQuery: string = '';

    constructor(private viewref: ViewContainerRef, private modalService: ModalDialogService) { }

    bookCover(book: BooksEx): string {
        return 'data:image/jpeg;base64,' + book.photo;
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
        this.lastQuery = text; // save last query,
        book.getRecords({ query: [BooksEx.ktitle + ';contains;' + text + ';OR', BooksEx.kauthor + ';contains;' + text + ';OR'] })
            .then(list => { this.bookList = list.models });
    }

    onSwipe(event: SwipeGestureEventData) {
        switch (event.direction) {
            case SwipeDirection.right:
                if (event.view != this.swipedItem && this.swipedItem) {
                    this.swipedItem.translateX = 0;
                }
                event.view.translateX = 60;
                this.swipedItem = event.view;
                break;

            case SwipeDirection.left:
                event.view.translateX = 0;
                this.swipedItem = null;
                break;

        }
    }

    doLoan(book: BooksEx) {
        if (this.swipedItem) this.swipedItem.translateX = 0;
        this.swipedItem = null;
        if (book.isLoaned === "out") {
            book.refresh()
                .then(() => {
                    dialog.confirm({
                        title: 'Confirm Book Return', message: 'Returning "' + book.title + '", loaned to  "' + book.loansList[0].FirstName + ' ' + book.loansList[0].LastName + '"?',
                        okButtonText: 'Confirm', cancelButtonText: 'Cancel'
                    })
                        .then(res => {
                            if (res) {
                                this.doReturnRequest(book);
                            }
                        })
                })
        } else {




            const options: ModalDialogOptions = {
                viewContainerRef: this.viewref,
                fullscreen: false,
                context: {}
            };

            this.modalService.showModal(StudentSelector, options)
                .then((select: Students) => {
                    if (select) {
                        console.log(select.firstName + ' ' + select.lastName);
                        setTimeout(() => {

                            dialog.confirm(
                                {
                                    title: 'Confirm Book Loan',
                                    message: 'Loan "' + book.title + '" to "' + select.firstName + ' ' + select.lastName + '"?',
                                    okButtonText: 'Confirm', cancelButtonText: 'Cancel'
                                }
                            ).then(result => {
                                if (result) { // did user confirm Loan request?
                                    this.doLoanRequest(book, select);
                                }
                            })
                        }, 600);

                    }

                });

        }
    }

    doReturnRequest(book: BooksEx) {
        let loan: Loans = new Loans();
        loan.getRecord(null, null, { query: [Loans.kbook_Id + ';=;' + book.ID] })
            .then(rec => {
                loan.deleteRecord().then(() => { book.refresh(); })
            })
    }

    doLoanRequest(book: BooksEx, student: Students) {
        let loan: Loans = new Loans();
        loan.book_Id = book.ID;
        loan.student_Id = student.ID;
        loan.borrowDate = new Date();
        loan.returnDate = new Date(); loan.returnDate.setDate(loan.returnDate.getDate() + 21); // books are loaned for 3 weeks
        loan.insertRecord()
            .then(rec => { book.refresh(); })
    }

}