import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private httpErrorHandler: ErrorHandleService) {}

  handleError(error: HttpErrorResponse): void {
    this.httpErrorHandler.handleHttpError(error);
  }
}
