import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { GlobalErrorHandler } from './@base/global-error-handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnimalsComponent } from './components/add-animals/add-animals.component';
import { AddAppliedMedicineComponent } from './components/add-applied-medicine/add-applied-medicine.component';
import { AddEmployeesComponent } from './components/add-employees/add-employees.component';
import { AddMedicinesComponent } from './components/add-medicines/add-medicines.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AddProductionComponent } from './components/add-production/add-production.component';
import { AddSettlementComponent } from './components/add-settlement/add-settlement.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ViewAnimalsComponent } from './components/view-animals/view-animals.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ViewMedicinesComponent } from './components/view-medicines/view-medicines.component';
import { AnimalFilterPipe } from './pipe/animal-filter.pipe';
import { EmployeeFilterPipe } from './pipe/employee-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalsComponent,
    AddAppliedMedicineComponent,
    AddEmployeesComponent,
    AddMedicinesComponent,
    AddOwnerComponent,
    AddProductionComponent,
    AddSettlementComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    ReportsComponent,
    ViewAnimalsComponent,
    ViewEmployeesComponent,
    ViewMedicinesComponent,
    AlertModalComponent,
    EmployeeFilterPipe,
    AnimalFilterPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
    NgbModule
  ],
  entryComponents: [ AlertModalComponent ],
  providers: [ { provide: ErrorHandler, useClass: GlobalErrorHandler } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
