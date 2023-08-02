import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChildComponent } from './second-child/second-child.component';
import { ThirdChildComponent } from './third-child/third-child.component';

const routes: Routes = [
  { path: 'child', component: SecondChildComponent },
  { path: 'third', component: ThirdChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
