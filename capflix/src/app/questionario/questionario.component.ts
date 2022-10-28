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
    this.quizzes.sort(() => Math.random() - 0.5);
    this.quizzes.forEach((quiz:Quiz)=>{
      quiz.answer.sort(() => Math.random() - 0.5);
    });
    console.log(this.quizzes)

  }


  onAnswer(option: boolean, valor: string) {
    this.answerSelected = true;
    this.valorSelecionado = valor;
    this.opcao = option;
    this.answerSelected = false;
    console.log(this.respostasSelecionadas)
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

    this.respostasSelecionadas.pop(this.respostaSelecionada);
    this.respostasSelecionadas.concat(this.respostaSelecionada);
    this.valoresSelecionados.pop(this.valorSelecionado);
    this.valoresSelecionados.concat(this.valorSelecionado);

    setTimeout(() => {

      return this.currentQuiz--

    }, 100);

  }

 finalizar(option:boolean) {
  this.respostaSelecionada = option;
  this.respostasSelecionadas.push(this.respostaSelecionada); 
 

 while (this.respostasSelecionadas.length < this.quizzes.length){
    this.respostasSelecionadas.push(false);
    console.log(this.respostasSelecionadas)
  } ;
  this.correctAnswers = this.respostasSelecionadas.filter((x: boolean):boolean => x).length;
  this.incorrectAnswers = this.respostasSelecionadas.length - this.correctAnswers;
  console.log(this.respostasSelecionadas);
 
 }

 navegarGabarito(){


 }

 


}





