import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginRequest } from 'src/app/models/login-request';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.formBuilder.group({
      usernameOrEmail: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ]
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    const loginRequest: LoginRequest = this.formGroup.value;
    this.authService
      .loginUser(loginRequest)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((user) => {
        if (user) {
          this.authService.setCurrentUser(user);
          window.location.reload();
        }
      });
  }
}
