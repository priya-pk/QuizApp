import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionsService } from '../questions.service';
 
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions:Question[];
  isAnswerShow: boolean = false;
  seconds:number;
  timer;
  qnProgress:number;

  constructor(private _quest: QuestionsService) { }

  ngOnInit(): void {
    this.seconds = 0;
    this.qnProgress = 0;
    
    this._quest.getQuest()
    .subscribe((data)=>{
      this.questions=JSON.parse(JSON.stringify(data));
      this.startTimer();
    })
  }
  // showAnswer(i){
  //   this.isAnswerShow =!this.isAnswerShow;
  // }

  startTimer() {
    this.timer = setInterval(()=>{
      this.seconds++;
    },1000);
  }

}
