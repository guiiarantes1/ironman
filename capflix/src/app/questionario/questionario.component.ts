import { Component, OnInit } from '@angular/core';
import { Quiz, QuizService } from '../quiz.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  quizzes: Quiz[] = [];

  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  valorSelecionado = '';




  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();

  }

  onAnswer(option: boolean, valor: string) {
    this.answerSelected = true;
    this.valorSelecionado = valor;

    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
  
   


    }, 200);

    if (option) {
      this.correctAnswers++;
      
    } else {
      this.incorrectAnswers++
    
 
    }



  }

}





