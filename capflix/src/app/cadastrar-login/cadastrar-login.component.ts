import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cadastrarLoginModel } from '../models/cadastrarLoginModel';


@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.css']
})
export class CadastrarLoginComponent implements OnInit {

  cadastroForm!: FormGroup;
  erro:boolean = true;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group(
      {
        email: ['',[Validators.required, Validators.email]],
        senha: ['',[Validators.required]],
        confirmaSenha: ['',Validators.required]
      }
    )
  }

  async cadastrarLogin(){
    var dadosCadastro = this.cadastroForm.getRawValue() as cadastrarLoginModel;
    if (dadosCadastro.senha != dadosCadastro.confirmaSenha){
      this.erro = false;
    }else{
      var body = {email:dadosCadastro.email, senha: dadosCadastro.senha};
      var response = await fetch('http://localhost:3000/login', {method:"POST", headers:{'Content-Type': 'application/json'} , body:JSON.stringify(body)})
      alert("Usuário cadastrado com sucesso!")
      this.router.navigate(['/login'])
    }
    console.log(dadosCadastro)

  }

}
