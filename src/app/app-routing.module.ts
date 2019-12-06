import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { TableInforComponent } from './components/table-infor/table-infor.component';


const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'table', component: TableInforComponent },
  { path: '**', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
