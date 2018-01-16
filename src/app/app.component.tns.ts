import { Component, AfterContentInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { FourDInterface } from 'js44d';

import { BookListComponent } from './bookList/bookList.component';
import { StudentListComponent } from './studentList/studentList.component';

export const routes: Routes = [
    { path: 'bookList', component: BookListComponent },
    { path: 'studentList', component: StudentListComponent }
];

@Component({
    moduleId: module.id,
    selector: 'library-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentInit {

    public appVersion;string = '?';
    constructor(public router: Router, private fourD: FourDInterface) {
        FourDInterface.fourDUrl = 'http://10.0.1.105:8181';

    }

    ngAfterContentInit() {
        // no predefined user, login...
        this.fourD.signIn("designer", "x")
            .then(() => {
                this.router.navigate(['/bookList']);
            })
    }

    openApp(app) {
        this.router.navigate([app]);
    }
}
