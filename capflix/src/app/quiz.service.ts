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
      question: 'No jQuery 3.5, a função que torna o elemento visível, caso ele esteja invisível, e invisível, caso esteja visível, é:',
      answer: [
        { valor:'A', option: 'hide()', correct: false },
        { valor:'B', option: 'toggle()', correct: true },
        { valor:'C', option: 'shift()', correct: false },
        { valor:'D', option: 'show()', correct: false },
      ]
    },
    {
      question: 'Considere o trecho JavaScript a seguir.  var x = 0; for (var i = 10; i < 15; i++) { x += i;}   Ao término da execução desse código, o conteúdo da variável x será:',
      answer: [
        { valor:'A', option: '0', correct: false },
        { valor:'B', option: '10', correct: false },
        { valor:'C', option: '60', correct: true },
        { valor:'D', option: '15', correct: false },
      ]
    },
    {
      question: 'Com relação ao Java Script, analise as afirmativas a seguir. I. o operador ++ é utilizado para incrementar variáveis de 1. Por exemplo, se x vale 34, y = ++x faz x igual a 35 e depois y igual a 35. II. o operador binário % retorna o inteiro restante da divisão dos dois operandos. Por exemplo, em x = 13 % 8, x assume o valor 5. III. o operador != retorna verdadeiro caso os operandos não sejam iguais. Por exemplo, se a = 7 e b = 9, em a != 7; retorna verdadeiro e em a != b; retorna falso. Assinale:',
      answer: [
        { valor:'A', option: 'se somente a afirmativa I estiver correta', correct: false },
        { valor:'B', option: 'se somente a afirmativa II estiver correta.', correct: false },
        { valor:'C', option: 'se somente a afirmativa III estiver correta.', correct: false },
        { valor:'D', option: 'se somente as afirmativas I e II estiverem corretas.', correct: true },
      ]
    },
    {
      question: 'Em um fragmento de código jQuery, para representar um elemento HTML cujo valor de id é bloco e um elemento cujo valor de classe é centro, utilizam-se, respectivamente:',
      answer: [
        { valor:'A', option: '$(".bloco") e $("#centro")', correct: false },
        { valor:'B', option: 'iQuery("#bloco") e jQuery(".centro")', correct: false },
        { valor:'C', option: '$("#bloco") e $(".centro")', correct: true },
        { valor:'D', option: '$Id("bloco") e $class("centro")', correct: false },
      ]
    },
    {
      question: 'O jQuery pode selecionar elementos HTML a partir de seletores, otimizando o desenvolvimento. Sobre a utilização de seletores no jQuery é correto afirmar:',
      answer: [
        { valor:'A', option: '$(p:first); retornará o primeiro dos elementos p.', correct: true },
        { valor:'B', option: '$(#formulario); retornará todos os elementos da classe formulario.', correct: false },
        { valor:'C', option: '$(.paragrafo); retornará o elemento com id igual a paragrafo.', correct: false },
        { valor:'D', option: '$(td, th); retornará todos os elementos th que são filhos de td.', correct: false },
      ]
    },
    {
      question: 'O jQuery é uma biblioteca Javascript criada para otimizar o desenvolvimento de aplicações web. Em relação às funções disponíveis na versão 3.3.1, é correto afirmar:',
      answer: [
        { valor:'A', option: '.add() adiciona uma nova classe passada por parâmetro a cada elemento da seleção.', correct: false },
        { valor:'B', option: '.append() adiciona o conteúdo passado por parâmetro no final de cada elemento da seleção.', correct: true },
        { valor:'C', option: '.each() remove cada elemento da seleção.', correct: false },
        { valor:'D', option: '.find() busca por um termo em toda a página HTML.', correct: false },
      ]
    },
    {
      question: 'No javascript é possível interagir com o console dos navegadores. O comando para imprimir o texto TJ-RN no console é:',
      answer: [
        { valor:'A', option: 'console.dump("TJ-RN ");', correct: false },
        { valor:'B', option: 'console.print("TJ-RN ");', correct: false },
        { valor:'C', option: 'console.log("TJ-RN ");', correct: true },
        { valor:'D', option: 'console.echo("TJ-RN ");', correct: false },
      ]
    },
    {
      question: 'O React é uma biblioteca JavaScript de código aberto e, atualmente, é uma das ferramentas mais populares entre os desenvolvedores web. São características do React ser uma biblioteca',
      answer: [
        { valor:'A', option: 'declarativa, que não gerencia seu próprio virtual DOM e não permite a criação de aplicativos móveis.', correct: false },
        { valor:'B', option: 'imperativa, que não gerencia seu próprio virtual DOM e não dá suporte a componentes reutilizáveis.', correct: false },
        { valor:'C', option: 'declarativa, que gerencia seu próprio virtual DOM e permite a criação de aplicativos móveis.', correct: true },
        { valor:'D', option: 'imperativa, que gerencia seu próprio virtual DOM e dá suporte a componentes reutilizáveis.', correct: false },       
      ]
    },
    {
      question: 'Qual a resposta correta?',
      answer: [
        { valor:'A', option: 'errada', correct: false },
        { valor:'B', option: 'errada', correct: false },
        { valor:'C', option: 'correta', correct: true },
        { valor:'D', option: 'errada', correct: false },
      ]
    },
    {
      question: 'Qual a resposta correta?',
      answer: [
        { valor:'A', option: 'errada', correct: false },
        { valor:'B', option: 'errada', correct: false },
        { valor:'C', option: 'correta', correct: true },
        { valor:'D', option: 'errada', correct: false },
      ]
    },
  ]

  constructor(){  }

  getQuizzes(){
    return this.quizzes;
  }
}
