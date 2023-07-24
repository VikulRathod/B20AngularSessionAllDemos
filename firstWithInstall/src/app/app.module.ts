import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { DirCompComponent } from './directivesDemo/dir-comp/dir-comp.component';
import { MyCustomDirective } from './directiveDemo/my-custom.directive';
import { MyCustomStructuralDirective } from './directiveDemo/my-custom-structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HighlightDirective,
    DirCompComponent,
    MyCustomDirective,
    MyCustomStructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [DirCompComponent]
})
export class AppModule { }
