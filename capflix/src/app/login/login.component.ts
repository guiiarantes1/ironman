import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  submitLogin(){

    var dadosLogin = this.loginForm.getRawValue() as loginModel;
    console.log(dadosLogin.email)
    console.log(dadosLogin.senha)
  }

}
