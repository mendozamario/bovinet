import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [ MatSnackBarModule, MatDialogModule ]
})
export class MaterialModule {}
