import { Component, Input, ViewChild } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

import { BooksEx } from '../dataModels/customDataModels/BooksEx';
import { Loans } from '../dataModels/DB/Loans';

@Component({
    moduleId: module.id,
    selector: 'book-editor',
    templateUrl: 'bookEditWindow.component.html'
})

export class BookEditWindow {


    @Input() public currentRecord: BooksEx;


    constructor(private params: ModalDialogParams) {
        this.currentRecord = params.context.record;
        this.currentRecord.refresh();
    }

    public close() {
        this.params.closeCallback();
    }
}