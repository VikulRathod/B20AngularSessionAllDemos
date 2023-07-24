import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './home/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { MyDirDirective } from './my-dir.directive';
import { CustomIfDirective } from './custom-if.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    CustomIfDirective,
    AppComponent,
    IndexComponent,    
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    MyDirDirective,
    PipeDemoComponent,
    ReversePipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [PipeDemoComponent]
})
export class AppModule { }
