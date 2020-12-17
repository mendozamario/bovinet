import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: [ './add-employees.component.css' ]
})
export class AddEmployeesComponent implements OnInit {
  formGroup: FormGroup;
  employee: Employee;
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder,
    private notifications: NotificationsService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.employee = new Employee();
    this.employee.id = '';
    this.employee.name = '';
    this.employee.position = '';
    this.employee.contractdate = '';
    this.employee.salary = 0;

    this.formGroup = this.formBuilder.group({
      id: [ this.employee.id, Validators.required ],
      name: [ this.employee.name, Validators.required ],
      position: [ this.employee.position, Validators.required ],
      contractdate: [ this.employee.contractdate, Validators.required ],
      salary: [ this.employee.salary, Validators.required ]
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
    this.employee = this.formGroup.value;
    this.employeeService.post(this.employee).subscribe((p) => {
      this.notifications.showAlert('Add employee', 'Employee registered sucessfully');
      this.employee = p;
    });
  }
}
