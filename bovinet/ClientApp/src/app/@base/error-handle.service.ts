import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {
  constructor(private modalService: NgbModal) {}

  handleHttpError(error: HttpErrorResponse): void {
    console.log(error);
    if (typeof error.error === 'string') {
      const modal = this.modalService.open(AlertModalComponent);
      modal.componentInstance.title = 'Error';
      modal.componentInstance.description = error.error;
    } else if (error.error.errors) {
      let errorMessage = '';
      for (const prop of Object.keys(error.error.errors)) {
        error.error.errors[prop].forEach((element: string) => {
          errorMessage += `- ${element} <br/>`;
        });
      }
      const modal = this.modalService.open(AlertModalComponent);
      modal.componentInstance.title = 'Se presentaron los siguientes errores';
      modal.componentInstance.description = errorMessage;
    }
  }
}
