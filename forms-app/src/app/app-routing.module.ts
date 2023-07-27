import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tforms/login/login.component';
import { BasicFormComponent } from './tforms/basic-form/basic-form.component';
import { RegisterComponent } from './tforms/register/register.component';

const routes: Routes = [
  { path: '', component: BasicFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
