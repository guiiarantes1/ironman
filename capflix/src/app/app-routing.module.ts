import { QuestionarioComponent } from './questionario/questionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastrarLoginComponent } from './cadastrar-login/cadastrar-login.component';




const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'questionario', component: QuestionarioComponent },
  { path: 'cadastrar-login', component: CadastrarLoginComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
