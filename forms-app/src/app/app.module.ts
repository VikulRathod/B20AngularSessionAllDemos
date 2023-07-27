import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './tforms/login/login.component';
import { BasicFormComponent } from './tforms/basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './tforms/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
