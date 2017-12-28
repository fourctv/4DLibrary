import { Component } from "@angular/core";

import { StudentsEx } from '../dataModels/customDataModels/StudentsEx';
import { StudentEditWindow } from './studentEditWindow.component';


@Component({
    moduleId: module.id,
    selector: 'student-list',
    templateUrl: 'studentList.component.html'
})

export class StudentListComponent {
    //
    // Declare Datagrid properties
    //
    public modelDef = StudentsEx; // the record datamodel to use 
    
        public editWindow = StudentEditWindow;
    
        // the columns for the datagrid
        public columnDefs = [
            { title: 'First Name', field: 'firstName', width:100},
            { title: 'Last Name', field: 'lastName', width:100 },
            { title: 'EMail', field: 'email', width:100 },
            { title: 'Address', field: 'address', width:150 },
            { title: 'City', field: 'city', width:100, filterable: { multi: true }  },
            { title: 'Primary Teacher', field: 'primaryTeacher', width: 100}
        ];
     
}