import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompimgComponent} from './compimg/compimg.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { Component3Component } from './component3/component3.component';

@NgModule({
  declarations: [
    AppComponent,
    CompimgComponent,
    Component2Component,
    FirstDirectiveDirective,
    Component3Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ CompimgComponent, Component2Component, Component3Component]
})
export class AppModule {
}
