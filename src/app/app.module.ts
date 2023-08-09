import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './user.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
   {
   path: '',
   component: UserDashboardComponent
   }, 
   {
path : 'user-details/:id',
component:UserDetailsComponent
   }
]

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    UserDetailsComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
