import { Component } from '@angular/core';

import { Books } from '../dataModels/DB/Books';
import { Students } from 'app/dataModels/DB/Students';

@Component({
    selector: 'students-queryband',
    template: `
            <form>
                <mat-form-field><input matInput placeholder="Last Name" name="lastName" type="text" style="width:180px;" [(ngModel)]="lastName"/></mat-form-field>
                <mat-form-field style="width:180px;margin-left:20px;"><input matInput placeholder="First Name" name="firstName" type="text" [(ngModel)]="firstName"/></mat-form-field>
                <mat-form-field style="width:180px;margin-left:20px;"><input matInput placeholder="City" name="city" type="text" [(ngModel)]="city"/></mat-form-field>
            </form>
`
})


export class StudentQueryBand {
    //
    // declare quey band fields
    //
    public lastName: string = '';
    public firstName: string = '';
    public city: string = '';
      
    //
    // build 4C-TV query based on items from query band
    //
    public get currentQuery(): Object {
        let query:any;

         // Query based on Student name
        if (this.lastName && this.lastName !== '') {
            query = {query:[Students.klastName+ ';contains;' + this.lastName + ';AND']};
        }

         // Query based on First Name
        if (this.firstName && this.firstName !== '') {
            let queryItem = Students.kfirstName+ ';contains;' + this.firstName + ';AND';
            (query)?query.query.push(queryItem):query = {query:[queryItem]};
        }

         // Query based on City
        if (this.city && this.city !== '') {
            let queryItem = Students.kcity+ ';contains;' + this.city + ';AND';
            (query)?query.query.push(queryItem):query = {query:[queryItem]};
        }
         
        return query;

    }
}
