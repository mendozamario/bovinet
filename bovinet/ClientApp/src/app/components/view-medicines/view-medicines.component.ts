import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  medicines: Medicine[];
  constructor(private medicineService: MedicineService) { }

  ngOnInit(): void {
    this.consultMedicine();
  }

  consultMedicine(){
    this.medicineService.get().subscribe(result => {
      this.medicines = result;
    });
  }

  deleteMedicine(code: string){
    this.medicineService.delete(code).subscribe(result => {
      alert("Medicine deleted");
      this.consultMedicine();
    })
  }

}
