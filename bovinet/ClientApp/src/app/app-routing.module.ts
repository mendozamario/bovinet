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

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'add-animals', component: AddAnimalsComponent },
  { path: 'add-appliedmedicine', component: AddAppliedMedicineComponent },
  { path: 'add-employees', component: AddEmployeesComponent },
  { path: 'add-medicines', component: AddMedicinesComponent },
  { path: 'add-owner', component: AddOwnerComponent },
  { path: 'add-production/:id', component: AddProductionComponent },
  { path: 'add-settlement', component: AddSettlementComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'view-animals', component: ViewAnimalsComponent },
  { path: 'view-employees', component: ViewEmployeesComponent },
  { path: 'view-medicines', component: ViewMedicinesComponent },
  { path: 'settlement', component: AddSettlementComponent },
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
