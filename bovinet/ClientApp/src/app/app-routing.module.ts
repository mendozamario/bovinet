import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddAnimalsComponent } from './components/add-animals/add-animals.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { AddMedicinesComponent } from './components/add-medicines/add-medicines.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AddProductionComponent } from './components/add-production/add-production.component';
import { AddSettlementComponent } from './components/add-settlement/add-settlement.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ViewAnimalsComponent } from './components/view-animals/view-animals.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ViewMedicinesComponent } from './components/view-medicines/view-medicines.component';
import { AddAppliedMedicineComponent } from './components/add-applied-medicine/add-applied-medicine.component';
import { LoginComponent } from './components/login/login.component';
import { NotAuthGuard } from './guards/not-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [
    NotAuthGuard
  ]},
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'add-animals', component: AddAnimalsComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'add-appliedmedicine', component: AddAppliedMedicineComponent, canActivate: [
    AuthGuard
  ]},
  { path: 'add-employees', component: AddEmployeesComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'add-medicines', component: AddMedicinesComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'add-owner', component: AddOwnerComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'add-production/:id', component: AddProductionComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'add-settlement', component: AddSettlementComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'reports', component: ReportsComponent},
  { path: 'view-animals', component: ViewAnimalsComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'view-employees', component: ViewEmployeesComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'view-medicines', component: ViewMedicinesComponent , canActivate: [
    AuthGuard
  ]},
  { path: 'settlement', component: AddSettlementComponent , canActivate: [
    AuthGuard
  ]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
