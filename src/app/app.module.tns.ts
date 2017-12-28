import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// nativescript
import { NSModuleFactoryLoader } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// plugins
import { NativeScriptUIDataFormModule } from 'nativescript-pro-ui/dataform/angular';

// app
import { Config } from './common/index';
import { AppComponent, routes } from './app.component';

// libs
import { FourDInterface, FourDModel, FourDCollection } from 'js44d';

// feature modules
import { BookListComponent } from './bookList/bookList.component';
import { BookEditWindow } from './bookList/bookEditWindow.component';
import { StudentListComponent } from './studentList/studentList.component';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

const routerModule = NativeScriptRouterModule.forRoot(routes);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptUIDataFormModule,
        HttpClientModule,
        routerModule

    ],
    declarations: [
        AppComponent, BookListComponent, BookEditWindow, StudentListComponent
    ],
    providers: [
        // Allows your {N} application to use lazy-loading
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        FourDInterface, FourDModel, FourDCollection
    ],
    entryComponents: [BookEditWindow],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
