import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// nativescript
import { NSModuleFactoryLoader } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// plugins

// app
import { Config } from './common/index';
import { AppComponent, routes } from './app.component';

// libs
import { FourDInterface, FourDModel, FourDCollection } from 'js44d';

// feature modules
import { BookListComponent } from './bookList/bookList.component';
import { BookEditWindow } from './bookList/bookEditWindow.component';
import { StudentListComponent } from './studentList/studentList.component';
import { StudentSelector } from './studentList/studentSelector.modal';

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
        HttpClientModule,
        routerModule

    ],
    exports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent, BookListComponent, BookEditWindow, StudentListComponent, StudentSelector
    ],
    providers: [
        // Allows your {N} application to use lazy-loading
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader },
        FourDInterface, FourDModel, FourDCollection
    ],
    entryComponents: [BookEditWindow, StudentSelector],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
