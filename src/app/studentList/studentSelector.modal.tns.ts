import { Component, Input, ViewChild } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

import { BooksEx } from '../dataModels/customDataModels/BooksEx';
import { Students } from '../dataModels/DB/Students';

@Component({
    moduleId: module.id,
    selector: 'student-selector',
    templateUrl: 'studentSelector.modal.html'
})

export class StudentSelector {


    public studentList: Array<Students> = [];


    constructor(private params: ModalDialogParams) {
    }


    public runSearch(text) {
        let student = new Students;
        student.getRecords({query: [Students.kfirstName+';contains;'+text+';OR',Students.klastName+';contains;'+text+';OR']})
            .then(list => { this.studentList = list.models });     
    }

    public selectStudent(index) {
        this.params.closeCallback(this.studentList[index]);
    }
    
    public close() {
        this.params.closeCallback(null);
    }

}