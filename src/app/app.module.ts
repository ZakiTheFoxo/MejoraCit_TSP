import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './navbar/top-bar/top-bar.component';
import { SplashScreenComponent } from './modules/splash-screen/splash-screen.component';
import { ReportarProblemaComponent } from './modules/reportar-problema/reportar-problema.component';
import { ReportarNuevoProblemaComponent } from './modules/reportar-nuevo-problema/reportar-nuevo-problema.component';
import { ReportarFinalComponent } from './modules/reportar-final/reportar-final.component';
import { RegisterComponent } from './modules/register/register.component';
import { MainPageComponent } from './modules/main-page/main-page.component';
import { LoginComponent } from './modules/login/login.component';
import { CaseDetailsComponent } from './modules/case-details/case-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SplashScreenComponent,
    ReportarProblemaComponent,
    ReportarNuevoProblemaComponent,
    ReportarFinalComponent,
    RegisterComponent,
    MainPageComponent,
    LoginComponent,
    CaseDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'reportes/:id', component: CaseDetailsComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
