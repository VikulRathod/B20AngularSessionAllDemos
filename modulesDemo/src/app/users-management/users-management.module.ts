import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { UsersManagementRoutingModule } from './users.management.routing.module';

// const routes: Routes = [
//   { path: '', component: UserListComponent }
// ];

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
    UsersManagementRoutingModule
  ]
  // exports: [
  //   UserListComponent
  // ]
})
export class UsersManagementModule {
  constructor() {
    console.log('users management module loaded');
  }
}
