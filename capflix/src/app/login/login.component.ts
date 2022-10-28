import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { loginModel } from '../models/loginModels';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['',[Validators.required, Validators.email]],
        senha: ['',[Validators.required]]
      }
    )
  }

  async submitLogin(){
    var dadosLogin = this.loginForm.getRawValue() as loginModel;
    var response = await fetch( `http://localhost:3000/login?email=${dadosLogin.email}&senha=${dadosLogin.senha}`)
    var body = await response.json();

    if (body.length == 0){
      alert("usuário invalido")
    }else {
      this.router.navigate(['/catalogo'])
    }
  }

}
