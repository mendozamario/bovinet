import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BootstrapModule } from '../core/bootstrap.module';
import { MaterialModule } from '../core/material.module';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { ErrorHandleService } from './services/error-handle.service';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [ AlertModalComponent ],
  imports: [ CommonModule, BootstrapModule, MaterialModule ],
  exports: [ CommonModule, AlertModalComponent, BootstrapModule, MaterialModule ],
  providers: [ ErrorHandleService, NotificationsService ],
  entryComponents: [ AlertModalComponent ]
})
export class SharedModule {}
