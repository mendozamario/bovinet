import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-add-production',
  templateUrl: './add-production.component.html',
  styleUrls: ['./add-production.component.css']
})
export class AddProductionComponent implements OnInit {

  formGroup: FormGroup;
  animalCode: number;
  production: Product;
  constructor(private productService: ProductionService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) 
  { 
    this.animalCode = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.production =  new Product();
    this.production.code = '';
    this.production.date = '';
    this.production.litercost = 0;
    this.production.quantity = 0;
    this.production.animalCode = this.animalCode.toString();

    this.formGroup = this.formBuilder.group({
      code: [this.production.code, Validators.required],
      date: [this.production.date, Validators.required],
      litercost: [this.production.litercost, Validators.required],
      quantity: [this.production.quantity, Validators.required],
      animalCode: [this.production.animalCode, Validators.required]
    });
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
    this.production = this.formGroup.value;
    this.productService.post(this.production).subscribe(result => {
      this.production = result;
      alert("Product has been registered");
    })
  }

  uploadAnimalCode(){
    alert(this.animalCode);
  }
}
