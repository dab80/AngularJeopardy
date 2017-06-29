import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import {
  ActivatedRoute,
  Params
} from '@angular/router';

import {
  Location
} from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // -- getting the question object from the parent
  @Input() theQuestion;

  // -- on guess event, pass the points, if any, up to the parent
  @Output() onGuess = new EventEmitter();

  guess: string;
  answer: string;
  audio_cheer = new Audio('../../assets/audio/Audience.mp3');
  audio_wah_wah_wah = new Audio('../../assets/audio/wah-wah-wah.mp3');

  // tslint:disable-next-line:no-inferrable-types
  score: number = 0;

  // constructor(private JeopardyService: JeopardyapiService) {
  constructor() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // this.getQuestion();
  }

  checkGuess() {

    // --- was the answer correct
    if (this.guess === this.theQuestion.answer) {
      // tslint:disable-next-line:radix
      // console.log('You are correct');

      // tslint:disable-next-line:radix
      this.score = parseInt(this.theQuestion.value);

      // console.log('score = ' + this.score);

      this.audio_cheer.load();
      this.audio_cheer.play();

    } else {
      // -- wrong answer
      this.audio_wah_wah_wah.load();
      this.audio_wah_wah_wah.play();
    }

    // --reset the guess to clear the display
    this.guess = '';

    // pass the points earned, if any, up to parent to prompt for 3 categories
    this.onGuess.emit(this.score);

    // -- reset the score
    this.score = 0;

  }// end of check guess

}// end of QuestionComponent
