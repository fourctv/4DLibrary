import { Component } from "@angular/core";

import { BooksEx } from '../dataModels/customDataModels/BooksEx';
import { BookEditWindow } from './bookEditWindow.component';

@Component({
    moduleId: module.id,
    selector: 'book-list',
    templateUrl: 'bookList.component.html'
})

export class BookListComponent {
    //
    // Declare Datagrid properties
    //
    public modelDef = BooksEx; // the record datamodel to use 

    public editWindow = BookEditWindow;

    // the columns for the datagrid
    public columnDefs = [
        { title: 'Title', field: 'title', width:250},
        { title: 'Author', field: 'author', width:150, filterable: { multi: true }  },
        { title: 'Status', field: 'isLoaned', width:50, template:function (dataItem){return (dataItem.isLoaned == 'in')?'\uf00c':'\uf00d'}, attributes:{style: "text-align: center; font-family: FontAwesome, fontawesome; color: darkred; font-size: 24px"} },
        { title: 'Description', field: 'description', width:250 },
        { title: 'Purchase Date', field: 'purchaseDate', template:function (dataItem){return (isNaN(dataItem.purchaseDate))?'':kendo.format('{0:d}',dataItem.purchaseDate)}, width: 80}
    ];
 
}