import { Component } from "@angular/core";

import { StudentsEx } from '../dataModels/customDataModels/StudentsEx';
import { FourDCollection } from 'js44d';


@Component({
    moduleId: module.id,
    selector: 'student-list',
    templateUrl: 'studentList.component.html'
})

export class StudentListComponent {

    public modelDef = StudentsEx; // the record datamodel to use 
    public studentList: Array<StudentsEx> = [];

    runSearch(text) {
        let student = new StudentsEx;
        student.getRecords({ query: [StudentsEx.kfirstName + ';contains;' + text + ';OR', StudentsEx.klastName + ';contains;' + text + ';OR'] })
            .then(list => { this.studentList = list.models });
    }

}