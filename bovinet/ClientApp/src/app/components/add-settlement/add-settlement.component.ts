import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Settlement } from 'src/app/models/settlement';

@Component({
  selector: 'app-add-settlement',
  templateUrl: './add-settlement.component.html',
  styleUrls: ['./add-settlement.component.css']
})
export class AddSettlementComponent implements OnInit {

  formGroup: FormGroup;
  employeeCode: number;
  settlement: Settlement;
  constructor(private settlementService: SettlementService) { }

  ngOnInit(): void {
  }

}
