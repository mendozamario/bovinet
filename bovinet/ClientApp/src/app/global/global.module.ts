import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './global-error-handler';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalModule { 
  static forRoot(): ModuleWithProviders<GlobalModule> {
    return {
      ngModule: GlobalModule,
      providers: [ { provide: ErrorHandler, useClass: GlobalErrorHandler } ]
    };
  }
}
