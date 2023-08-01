import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChildComponent } from './second-child/second-child.component';

const routes: Routes = [
  { path: 'child', component: SecondChildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
