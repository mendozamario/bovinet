import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Owner } from 'src/app/models/owner';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OwnerService } from 'src/app/services/owner.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: [ './add-owner.component.css' ]
})
export class AddOwnerComponent implements OnInit {
  formGroup: FormGroup;
  owner: Owner;
  constructor(
    private ownerService: OwnerService,
    private formBuilder: FormBuilder,
    private notifications: NotificationsService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.owner = new Owner();
    this.owner.id = '';
    this.owner.name = '';
    this.owner.mail = '';
    this.owner.password = '';
    this.owner.phonenumber = '';

    this.formGroup = this.formBuilder.group({
      id: [ this.owner.id, Validators.required ],
      name: [ this.owner.name, Validators.required ],
      mail: [ this.owner.mail, Validators.required ],
      username: [ '', [ Validators.required ] ],
      password: [ this.owner.password, Validators.required ],
      phonenumber: [ this.owner.phonenumber, Validators.required ]
    });
  }

  get control() {
    return this.formGroup.controls;
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.owner = this.formGroup.value;
    const user: User = {
      username: this.control['username'].value,
      email: this.control['mail'].value,
      password: this.control['password'].value
    };

    this.authService
      .registerUser(user)
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(null);
        })
      )
      .subscribe((savedUser: User) => {
        if (savedUser) {
          this.owner.userId = savedUser.id;
          this.ownerService.post(this.owner).subscribe((p) => {
            this.notifications.showAlert('Add owner', 'Owner registered sucessfully');
            this.owner = p;
          });
        }
      });
  }
}
