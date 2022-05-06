import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './components/admin/view-category/view-category.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component';

const routes: Routes = [
  {path: 'signup',component: SignupComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent,
   canActivate:[AdminGuard],
  children:[
    {path:'profile',component:ProfileComponent},
    {path:'categories',component:ViewCategoryComponent},
    {path:'add-category',component:AddCategoryComponent},
    {path:'quizzes',component:ViewQuizzesComponent},
    {path:'',component:WelcomeComponent},
  

    ]
  },
  {path:'user-dashboard',component:UserDashboardComponent,pathMatch:'full',canActivate:[UserGuard]},
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path: '**',redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
