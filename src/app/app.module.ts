import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// app
import { Config } from './common/index';
import { AppComponent, routes } from './app.component';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

// libs
import { FourDModule } from 'js44d';
// feature modules
import { JS44DModule, ModalModule } from 'js44d';

const routerModule = RouterModule.forRoot(routes);

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        routerModule,
        FourDModule, JS44DModule, ModalModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
