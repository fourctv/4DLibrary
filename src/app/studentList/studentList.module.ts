import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// material
import { MatCheckboxModule, MatInputModule, MatFormFieldModule, MatButtonModule } from '@angular/material';

import { StudentListComponent } from './studentList.component';
import { StudentQueryBand } from './studentQueryBand.component';
import { StudentEditWindow } from './studentEditWindow.component';


// feature modules
import { FourDModule } from 'js44d';
import { JS44DModule } from 'js44d';
import { ModalModule } from 'js44d';

export const StudentListRoutes: Routes = [
  {
    path: '',
    component: StudentListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(StudentListRoutes),
    MatCheckboxModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    FourDModule, JS44DModule, ModalModule
  ],
  providers: [HttpClient],
  declarations: [StudentListComponent, StudentQueryBand, StudentEditWindow],
  entryComponents: [StudentEditWindow]
})
export class StudentListModule { }
