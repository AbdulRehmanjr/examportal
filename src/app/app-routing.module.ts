import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path: 'signup',component: SignupComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path: '**',redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
