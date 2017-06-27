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
  random: any;
  errorMessage: string;
  successMessage: string;

  constructor(private JeopardyService: JeopardyapiService) {

  }
  // -- subscribe is similar to a promise.done
  getQuestion() {
    this.JeopardyService.getRecords('random')
      .subscribe(
        random => { // same as function(characters)
          this.random = random[0];
          console.log(this.random)
          this.successMessage = 'Got the stuff';
        },
        error => { // same as function(error)
          this.errorMessage = < any > error;
          console.log(this.errorMessage)
        });
  }

  ngOnInit() {
    this.getQuestion();
  }

}
