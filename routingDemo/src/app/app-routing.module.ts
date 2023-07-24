import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: '', component: LoginGoogleComponent },
      { path: 'google', component: LoginGoogleComponent, outlet: 'gl' },
      { path: 'facebook', component: LoginFacebookComponent, outlet: 'fb' }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [AuthGuard]
    // children: [
    //   { path: 'details', component: ProductsDetailsComponent }
    //   // { path: 'details/:id', component: ProductsDetailsComponent },
    //   // { path: 'details/:id/:name', component: ProductsDetailsComponent }    
    // ]
  },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'notfound', component: PageNotFoundComponent },
  // { path: '**', component: PageNotFoundComponent},  
  { path: '**', redirectTo: 'notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
