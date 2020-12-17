import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';

@Injectable()
export class NotificationsService {
  constructor(private dialog: MatDialog, private zone: NgZone) {}

  showAlert(title: string, message: string): void {
    this.zone.run(() => {
      const dialogRef = this.dialog.open(AlertModalComponent, {
        width: '500px',
        data: { title: title, message: message }
      });
    });
  }
}
