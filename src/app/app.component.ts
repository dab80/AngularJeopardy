import {
  Component,
  OnInit
} from '@angular/core';

import {
  JeopardyapiService
} from './jeopardyapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy';
  theQuestion: any = {};
  categories: any = {}; // need to instanciate with {}
  currentStatus: string = '';
  errorMessage: string;
  successMessage: string;
  answer: string;
  displayCategory: number = 1;
  score: number = 0;

  constructor(private JeopardyService: JeopardyapiService) {}

  // -- subscribe is similar to a promise.done
  getQuestion(catNum: number) {
    // console.log('catNum = ' + catNum);

    this.JeopardyService.getRecords('clues?category=' + catNum)
      .subscribe(
        theQuestion => { // same as function(theQuestion)
          this.theQuestion = theQuestion[0];
          // console.log(this.theQuestion);
          console.log('The correct answer is ' + this.theQuestion.answer);

          // -- check for null point value and set to 300, if null
          if (this.theQuestion.value == null) {
            this.getQuestion(catNum + 1);
            console.log('Null value was detected');
          }
          this.answer = this.theQuestion.answer;
          this.successMessage = 'Got the stuff';
        },
        error => { // same as function(error)
          this.errorMessage = < any > error;
          console.log(this.errorMessage)
        });

    // -- set display to question
    this.displayCategory = 0;

  }

  get3Categories(points: number) {
    // let my_url = '"http://jservice.io/api/categories?count=3&offset=' + Math.floor(Math.random() * 100) + '"';
    // -- add points, which might be 0
    this.score += points;

    // this.currentStatus = 'get3Categories';
    this.JeopardyService.getRecords('categories?count=3&offset=' + Math.floor(Math.random() * 100))
      .subscribe(
        categories => { // same as function(theQuestion)
          this.categories = categories;
          // console.log(this.categories);

          this.successMessage = 'Got the stuff';
        },
        error => { // same as function(error)
          this.errorMessage = < any > error;
          console.log(this.errorMessage)
        });

    // -- set display to categories
    this.displayCategory = 1;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // get 3 categories
    this.get3Categories(0);
    // this.getQuestion();
  }

}
