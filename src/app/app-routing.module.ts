import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path: 'signup',component: SignupComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent,pathMatch:'full',canActivate:[AdminGuard]},
  {path:'user',component:UserDashboardComponent,pathMatch:'full',canActivate:[UserGuard]},
  {path: '**',redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
