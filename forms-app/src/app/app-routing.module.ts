import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tforms/login/login.component';
import { BasicFormComponent } from './tforms/basic-form/basic-form.component';
import { RegisterComponent } from './tforms/register/register.component';
import { SigninComponent } from './rforms/signin/signin.component';
import { SignupComponent } from './rforms/signup/signup.component';

const routes: Routes = [
  { path: '', component: BasicFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
