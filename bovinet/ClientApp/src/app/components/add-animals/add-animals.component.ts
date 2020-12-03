import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css']
})
export class AddAnimalsComponent implements OnInit {

  formGroup: FormGroup;
  animal: Animal;
  constructor(private animalSerivce: AnimalService, private formBuilder: FormBuilder, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.animal =  new Animal();
    this.animal.code = '';
    this.animal.breed = '';
    this.animal.weigth = 0;
    this.animal.datebirth = '';
    this.animal.type = '';
    this.animal.status = '';
    this.animal.origin = '';

    this.formGroup = this.formBuilder.group({
      code: [this.animal.code, Validators.required],
      breed: [this.animal.breed, Validators.required],
      weigth: [this.animal.weigth, Validators.required],
      datebirth: [this.animal.datebirth, Validators.required],
      type: [this.animal.type, Validators.required],
      status: [this.animal.status, Validators.required],
      origin: [this.animal.origin, Validators.required]
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
    this.animal = this.formGroup.value;
    this.animalSerivce.post(this.animal).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Add animal"
      messageBox.componentInstance.message = "Animal registered sucessfully"
      this.animal = p;
    });
  }
}
