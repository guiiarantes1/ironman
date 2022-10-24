import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title!:string;

}
