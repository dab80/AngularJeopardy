import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HttpModule
} from '@angular/http';
import {
  FormsModule
} from '@angular/forms'; // -- allows for 2 way data binding

import {
  AppComponent
} from './app.component';
import {
  JeopardyapiService
} from './jeopardyapi.service'
import {
  QuestionComponent
} from './question/question.component';
import {
  CategoryComponent
} from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
