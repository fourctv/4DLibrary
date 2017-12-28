import { Component, Input, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { RecordEditWindow } from 'js44d';
import { ModalConfig } from 'js44d';
import { DataGrid } from 'js44d';

import { StudentsEx } from '../dataModels/customDataModels/StudentsEx';
import { Loans } from '../dataModels/DB/Loans';

@Component({
    moduleId: module.id,
    selector: 'student-editor',
    templateUrl: 'studentEditWindow.component.html'
})

export class StudentEditWindow extends RecordEditWindow implements AfterContentInit {
    public static dialogConfig: ModalConfig = <ModalConfig>{
        actions: ['Maximize', 'Minimize', 'Close'], position: { top: 100, left: 100 }, selfCentered: true,
        title: 'Cliente Best',
        isResizable: false,
        width: 750, height: 700
    };

    @Input() public currentRecord: StudentsEx;

    @Input() public get recordCount(): string { return (this.currentRecord.loansList) ? this.currentRecord.loansList.length.toString() + ' items' : '0'; }

    @Input() public columnDefs = [
        { title: 'Book Title', width: 120, field: 'BookTitle' },
        { title: 'Borrow Date', field: 'borrowDate', width: 80 },
        { title: 'Return Date', field: 'returnDate', width: 80 }
    ];

    @ViewChild(DataGrid) private theGrid: DataGrid;

    ngAfterViewInit() {
        if (this.currentRecord && this.theGrid) this.theGrid.setDataSource(<any>this.currentRecord.loansList);
    }

    ngAfterContentInit() {
        this.dialog.setTitle('Info For Student: ' + this.currentRecord.firstName + ' '+ this.currentRecord.lastName);
    }
}