import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './tforms/login/login.component';
import { BasicFormComponent } from './tforms/basic-form/basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './tforms/register/register.component';
import { SigninComponent } from './rforms/signin/signin.component';
import { SignupComponent } from './rforms/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicFormComponent,
    RegisterComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
