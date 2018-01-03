import { Component } from '@angular/core';

import { Books } from '../dataModels/DB/Books';
import { Students } from 'app/dataModels/DB/Students';

@Component({
    selector: 'students-queryband',
    template: `
            <form>
                <label class="fieldPrompt" for="lastName" style="margin-right:5px;">Last Name</label>
                <input name="lastName" type="text" class="fieldEntry"  style="width:180px;height:20px;" [(ngModel)]="lastName"/>
                <label class="fieldPrompt" for="firstName" style="margin-right:5px;margin-left:10px;">First Name</label>
                <input name="firstName" type="text" class="fieldEntry"  style="width:180px;height:20px;" [(ngModel)]="firstName"/>
                <label class="fieldPrompt" for="city" style="margin-right:5px;margin-left:10px;">City</label>
                <input name="city" type="text" class="fieldEntry"  style="width:180px;height:20px;" [(ngModel)]="city"/>
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
