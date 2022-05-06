import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes:any[]=[]
  constructor(private quizservice:QuizService) { }

  ngOnInit(): void {
    this.quizservice.getQuizzes().subscribe((data:any)=>{

      this.quizzes=data;
    });
  }

}
