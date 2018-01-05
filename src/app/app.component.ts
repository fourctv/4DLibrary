import { Component, AfterContentInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { FourDInterface } from 'js44d';

export const routes: Routes = [
    { path: 'bookList', loadChildren: 'app/bookList/bookList.module#BookListModule' },
    { path: 'studentList', loadChildren: 'app/studentList/studentList.module#StudentListModule' }
];

@Component({
    moduleId: module.id,
    selector: 'library-app',
    templateUrl: './app.component.html',
    styles: [`
    nav a {
        color: green;
        font-size: 24px;
        font-weight: 600;
        font-family: sans-serif;
        line-height: 48px;
        margin-right: 20px;
        text-decoration: none;
        vertical-align: middle;
      }
      
      nav a:hover,
      nav a:focus {
          color: #23527c;
          font-size: 25px;
          font-weight: 900;
      }
      `]
})
export class AppComponent implements AfterContentInit {

    public appVersion;string = '?';
    constructor(public router: Router, private fourD: FourDInterface) {
        if (window.location.hostname === 'localhost' && window.location.port === '4200') {
            FourDInterface.fourDUrl = 'http://localhost:8181';
        } else {
            FourDInterface.fourDUrl = window.location.origin;
        }
    }

    ngAfterContentInit() {
        // no predefined user, login...
        this.fourD.signIn("designer", "x")
            .then(() => {
                this.router.navigate(['/bookList'], { skipLocationChange: true });
            })
    }

    openApp(app) {
        this.router.navigate([app], { skipLocationChange: true });
    }
}
