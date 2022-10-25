import { Injectable } from '@angular/core';


export interface Quiz{
    question: string;
    answer: { option: string, correct: boolean, valor:string } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: '1 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '2 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '3 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '4 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '5 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '6 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '7 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '8 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '9 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    {
      question: '10 Qual a resposta correta?',
      answer: [
        { valor:'a', option: 'errada', correct: false },
        { valor:'b', option: 'errada', correct: false },
        { valor:'c', option: 'correta', correct: true },
        { valor:'d', option: 'errada', correct: false },
      ]
    },
    
    
  ]

  constructor(){  }

  getQuizzes(){
    return this.quizzes;
  }
}
