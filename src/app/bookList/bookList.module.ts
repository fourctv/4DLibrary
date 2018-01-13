import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// material
import { MatCheckboxModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { BookListComponent } from './bookList.component';
import { BooksQueryBand } from './bookQueryBand.component';
import { BookEditWindow } from './bookEditWindow.component';


// feature modules
import { FourDModule } from 'js44d';
import { JS44DModule } from 'js44d';
import { ModalModule } from 'js44d';

export const BookListRoutes: Routes = [
  {
    path: '',
    component: BookListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(BookListRoutes),
    MatCheckboxModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    FourDModule, JS44DModule, ModalModule
  ],
  providers: [HttpClient],
  declarations: [BookListComponent, BooksQueryBand, BookEditWindow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [BookEditWindow]
})
export class BookListModule { }
