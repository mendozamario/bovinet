import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-add-medicines',
  templateUrl: './add-medicines.component.html',
  styleUrls: ['./add-medicines.component.css']
})
export class AddMedicinesComponent implements OnInit {

  formGroup: FormGroup;
  medicine: Medicine;
  constructor(private medicineService: MedicineService, private formBuilder: FormBuilder, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.medicine = new Medicine();
    this.medicine.code = '';
    this.medicine.name = '';
    this.medicine.type = '';
    this.medicine.expirationdate = '';
    this.medicine.unitcost = 0; 
    this.medicine.quantity = 0;

    this.formGroup = this.formBuilder.group({
      code: [this.medicine.code, Validators.required],
      name: [this.medicine.name, Validators.required],
      type: [this.medicine.type, Validators.required],
      expirationdate: [this.medicine.expirationdate, Validators.required],
      unitcost: [this.medicine.unitcost, Validators.required],
      quantity: [this.medicine.quantity, Validators.required],
    })
  }

  get control(){
    return this.formGroup.controls;
  }

  onSubmit(){
    if (this.formGroup.invalid){
      return;
    }
    this.add();
  }

  add(){
    this.medicine = this.formGroup.value;
    this.medicineService.post(this.medicine).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Add medicine"
      messageBox.componentInstance.message = "Medicine registered sucessfully"
      this.medicine = p;
    }); 
  }
}
