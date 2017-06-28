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

import {
  JeopardyapiService
} from '../jeopardyapi.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() random;

  // random: any;
  errorMessage: string;
  successMessage: string;
  guess: string;
  answer: string;
  audio_cheer = new Audio('../../assets/audio/Audience.mp3');
  // tslint:disable-next-line:no-inferrable-types
  score: number = 0;
  timer_is_on = 0;
  counter = 0;
  t;

  @Output() onGuess = new EventEmitter();

  // constructor(private JeopardyService: JeopardyapiService) {
  constructor() {}


  // // -- subscribe is similar to a promise.done
  // getQuestion() {
  //   this.JeopardyService.getRecords('random')
  //     .subscribe(
  //       random => { // same as function(random)
  //         this.random = random[0];
  //         // this.random = random;
  //         console.log(this.random);
  //         console.log('The correct answer is ' + this.random.answer);

  //         // -- check for null point value and set to 300, if null
  //         if (this.random.value == null) {
  //           this.getQuestion();
  //           console.log('Null value was detected');
  //         }
  //         this.answer = this.random.answer;
  //         this.successMessage = 'Got the stuff';
  //       },
  //       error => { // same as function(error)
  //         this.errorMessage = < any > error;
  //         console.log(this.errorMessage)
  //       });
  // }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // this.getQuestion();
  }

  checkGuess() {
    console.log('The guess was ' + this.guess);

    // this.answer = this.random[0].answer;

    if (this.guess === this.random.answer) {
      // tslint:disable-next-line:radix
      console.log('You are correct');

      this.score = this.score + parseInt(this.random.value);
    }

    this.celebrate();

    // this.getQuestion();
  }

  startCount() {
    // play cheering crowd
    this.audio_cheer.load();
    this.audio_cheer.play();

    if (!this.timer_is_on) {
      this.timer_is_on = 1;
      this.celebrate();
    }
  }

  celebrate() {
    console.log('entering celebrate');

    // // if counter is odd, change text
    // if ((this.counter % 2) !== 0) {
    //   main_heading.html("YOU'RE CORRECT!!!");
    // } else {
    //   // main_heading.html() = "'TEAM ' + team_num + ' SCORED!!!'";
    //   main_heading.html("WOW!!!");
    // }

    // play cheering crowd
    this.audio_cheer.load();
    this.audio_cheer.play();

    if (!this.timer_is_on) {
      this.timer_is_on = 1;
    }

    // wait 6 seconds
    this.t = setTimeout(function () {

    }, 6000);

    // breakout
    // if (this.counter === 6) {
    //   this.stopCount();
    // }

    this.stopCount();

    console.log('levaving celebrate');

  }

  stopCount() {
    clearTimeout(this.t);
    this.timer_is_on = 0;
    this.counter = 0;

    // this.audio_cheer.pause();

    // --reset the guess to clear the display
    this.guess = '';

    this.onGuess.emit();

    console.log('leaving celebrate');
    // main_heading.css('color', "white");
    // main_heading.html("Jeopardy Lite!");
  }

}
