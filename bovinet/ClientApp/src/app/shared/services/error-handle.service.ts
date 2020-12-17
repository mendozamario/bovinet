import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationsService } from './notifications.service';

@Injectable()
export class ErrorHandleService {
  constructor(private notificationsService: NotificationsService) {}

  handleHttpError(error: Error): void {
    console.log(error);
    if (error instanceof HttpErrorResponse) {
      if (typeof error.error === 'string') {
        this.notificationsService.showAlert('Error', error.error);
      } else if (error.error.errors) {
        let errorMessage = '';
        for (const prop of Object.keys(error.error.errors)) {
          error.error.errors[prop].forEach((element: string) => {
            errorMessage += `- ${element} <br/>`;
          });
        }
        this.notificationsService.showAlert('Se presentaron los siguientes errores', errorMessage);
      }
    }
  }
}
