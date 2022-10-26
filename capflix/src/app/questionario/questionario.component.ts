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
  valoresSelecionados: any = [];
  opcao!: any;
  respostaSelecionada!: boolean;
  respostasSelecionadas: any = [];



  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes();

  }


  onAnswer(option: boolean, valor: string) {
    this.answerSelected = true;
    this.valorSelecionado = valor;
    this.opcao = option;
    this.answerSelected = false;
  }

  proxQuest(option: boolean, valor: string) {

    this.respostaSelecionada = option;
    this.respostasSelecionadas.push(this.respostaSelecionada);
    this.valoresSelecionados.push(this.valorSelecionado);
    console.log(this.respostasSelecionadas)
    setTimeout(() => {



      return this.currentQuiz++

    }, 100);


  }


  antQuest() {

    setTimeout(() => {

      return this.currentQuiz--

    }, 100);

    this.respostasSelecionadas.pop(this.respostaSelecionada);
    this.respostasSelecionadas.concat(this.respostaSelecionada);
    this.valoresSelecionados.pop(this.valorSelecionado);
    this.valoresSelecionados.concat(this.valorSelecionado);

  }

 finalizar(option:boolean) {
  this.respostaSelecionada = option;
  this.respostasSelecionadas.push(this.respostaSelecionada); 
  this.correctAnswers = this.respostasSelecionadas.filter((x: boolean):boolean => x).length;
  this.incorrectAnswers = this.respostasSelecionadas - this.correctAnswers;
  console.log(this.respostasSelecionadas);

 }

}





