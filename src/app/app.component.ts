import {
  Component
} from '@angular/core';

import {
  JeopardyapiService
} from './jeopardyapi.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeopardy';
  random: any = {};
    errorMessage: string;
  successMessage: string;
  // guess: string;
  answer: string;

  constructor(private JeopardyService: JeopardyapiService) {}

  // -- subscribe is similar to a promise.done
  getQuestion() {
    this.JeopardyService.getRecords('random')
      .subscribe(
        random => { // same as function(random)
          this.random = random[0];
          // this.random = random;
          console.log(this.random);
          console.log('The correct answer is ' + this.random.answer);

          // -- check for null point value and set to 300, if null
          if (this.random.value == null) {
            this.getQuestion();
            console.log('Null value was detected');
          }
          this.answer = this.random.answer;
          this.successMessage = 'Got the stuff';
        },
        error => { // same as function(error)
          this.errorMessage = < any > error;
          console.log(this.errorMessage)
        });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getQuestion();
  }

}
