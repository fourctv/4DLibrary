import { Component, Input, ViewChild } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import * as dialog from "tns-core-modules/ui/dialogs";

import { BooksEx } from '../dataModels/customDataModels/BooksEx';
import { Students } from '../dataModels/DB/Students';

@Component({
    moduleId: module.id,
    selector: 'student-selector',
    templateUrl: 'studentSelector.modal.html'
})

export class StudentSelector {


    public studentList: Array<Students> = [];
    public book:BooksEx;

    constructor(private params: ModalDialogParams) {
        this.book = params.context.book;
    }


    public runSearch(text) {
        let student = new Students;
        student.getRecords({query: [Students.kfirstName+';contains;'+text+';OR',Students.klastName+';contains;'+text+';OR']})
            .then(list => { this.studentList = list.models });     
    }

    public selectStudent(index) {
        let student:Students = this.studentList[index];
        dialog.confirm(
            {
                title: 'Confirm Book Loan',
                message: 'Loan "' + this.book.title + '" to "' + student.firstName + ' ' + student.lastName + '"?',
                okButtonText: 'Confirm', cancelButtonText: 'Cancel'
            }
        ).then(result => {
            if (result) { // did user confirm Loan request?
                this.params.closeCallback(student);
            }
        })

    }
    
    public close() {
        this.params.closeCallback(null);
    }

}