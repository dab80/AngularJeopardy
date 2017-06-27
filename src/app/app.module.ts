import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms' // -- allows for 2 way data binding

import { AppComponent } from './app.component';
import { JeopardyapiService } from './jeopardyapi.service'
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { GuessComponent } from './guess/guess.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScoreComponent,
    GuessComponent
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
export class AppModule { }
