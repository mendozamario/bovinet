import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { ErrorHandleService } from './services/error-handle.service';

@NgModule({
  declarations: [ AlertModalComponent ],
  imports: [ CommonModule, NgbModule ],
  exports: [ AlertModalComponent, NgbModule, CommonModule ],
  providers: [ ErrorHandleService ]
})
export class SharedModule {}
