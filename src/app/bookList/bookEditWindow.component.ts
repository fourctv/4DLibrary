import { Component, Input, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RecordEditWindow } from 'js44d';
import { ModalConfig } from 'js44d';
import { DataGrid } from 'js44d';

import { BooksEx } from '../dataModels/customDataModels/BooksEx';
import { Loans } from '../dataModels/DB/Loans';

@Component({
    moduleId: module.id,
    selector: 'book-editor',
    templateUrl: 'bookEditWindow.component.html'
})

export class BookEditWindow extends RecordEditWindow implements AfterContentInit {
    public static dialogConfig: ModalConfig = <ModalConfig>{
        actions: ['Maximize', 'Minimize', 'Close'], position: { top: 100, left: 100 }, selfCentered: true,
        title: 'Cliente Best',
        isResizable: false,
        width: 750, height: 600
    };

    @Input() public currentRecord: BooksEx;

    @Input() public get recordCount(): string { return (this.currentRecord.loansList) ? this.currentRecord.loansList.length.toString() + ' items' : '0'; }
    
    @Input() public get bookPhotoURL(): SafeResourceUrl { return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,'+this.currentRecord.photo); }

    @Input() public columnDefs = [
        { title: 'First Name', width: 80, field: 'FirstName' },
        { title: 'Last Name', width: 80, field: 'LastName' },
        { title: 'Borrow Date', field: 'borrowDate', width: 80 },
        { title: 'Return Date', field: 'returnDate', width: 80 }
    ];

    @ViewChild(DataGrid) private theGrid: DataGrid;
    
    constructor(private sanitizer: DomSanitizer) {super()}

    ngAfterViewInit() {
        if (this.currentRecord && this.theGrid) this.theGrid.setDataSource(<any>this.currentRecord.loansList);
    }

    ngAfterContentInit() {
        this.dialog.setTitle('Editing Book: ' + this.currentRecord.title);
    }
}