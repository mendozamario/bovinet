import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Settlement } from 'src/app/models/settlement';
import { EmployeeService } from 'src/app/services/employee.service';
import { SettlementService } from 'src/app/services/settlement.service';

@Component({
  selector: 'app-add-settlement',
  templateUrl: './add-settlement.component.html',
  styleUrls: [ './add-settlement.component.css' ]
})
export class AddSettlementComponent implements OnInit {
  salary: number;
  formGroup: FormGroup;
  employeeId: number;
  settlement: Settlement;
  constructor(
    private settlementService: SettlementService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.employeeId = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.consultSalary();
    this.buildForm();
  }

  private buildForm() {
    this.settlement = new Settlement();
    this.settlement.code = '';
    this.settlement.bonus = 0;
    this.settlement.discount = 0;
    this.settlement.settlementdate = '';
    this.settlement.employeeId = this.employeeId.toString();

    this.formGroup = this.formBuilder.group({
      code: [ this.settlement.code, Validators.required ],
      bonus: [ this.settlement.bonus, Validators.required ],
      discount: [ this.settlement.discount, Validators.required ],
      employeeId: [ this.settlement.employeeId, Validators.required ],
      settlementdate: [ this.settlement.settlementdate, Validators.required ]
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
    this.consultSalary();
    this.settlement = this.formGroup.value;
    this.settlement.salary = this.salary;
    console.log(this.settlement);
    this.settlementService.post(this.settlement).subscribe((result) => {
      this.settlement = result;
      alert('Settlement has been registered');

      console.log(result);
    });
  }

  consultSalary() {
    this.employeeService.getId(this.employeeId.toString()).subscribe((result) => {
      this.salary = result.salary;
    });
  }
}
