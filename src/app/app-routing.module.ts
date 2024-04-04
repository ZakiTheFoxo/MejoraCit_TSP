import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

import { SplashScreenComponent } from './modules/splash-screen/splash-screen.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { LoginComponent } from './modules/login/login.component';
import { CaseDetailsComponent } from './modules/case-details/case-details.component';
import { RegisterComponent } from './modules/register/register.component';
import { ReportarFinalComponent } from './modules/reportar-final/reportar-final.component';
import { ReportarNuevoProblemaComponent } from './modules/reportar-nuevo-problema/reportar-nuevo-problema.component';
import { ReportarProblemaComponent } from './modules/reportar-problema/reportar-problema.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component:SplashScreenComponent},
  { path: 'home', component:MainPageComponent, canActivate: [AuthGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'reportes/:id', component:CaseDetailsComponent, canActivate: [AuthGuard]},
  { path: 'register', component:RegisterComponent, canActivate: [AuthGuard]},
  { path: 'report', component:ReportarProblemaComponent, canActivate: [AuthGuard]},
  { path: 'reportnew', component:ReportarNuevoProblemaComponent, canActivate: [AuthGuard]},
  { path: 'reportfinal', component:ReportarFinalComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo:'/splash'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
