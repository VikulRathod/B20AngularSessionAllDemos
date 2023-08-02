import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AmazonComponent } from './amazon/amazon.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: 'flipkart', component: FlipkartComponent },
  { path: 'amazon', component: AmazonComponent },
  { path: 'notification', component: NotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
