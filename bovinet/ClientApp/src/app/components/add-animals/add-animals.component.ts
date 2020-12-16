import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { Animal } from 'src/app/models/animal';
import { Owner } from 'src/app/models/owner';
import { AnimalService } from 'src/app/services/animal.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.css']
})
export class AddAnimalsComponent implements OnInit {

  owners: Owner[];
  animalCode: string;
  btnTitle = 'Add';
  action = 'Add';
  formGroup: FormGroup;
  animal: Animal;
  constructor(private animalSerivce: AnimalService, private formBuilder: FormBuilder, private modalService:NgbModal, private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.buildForm();
    this.edit();
    this.consultOwners();
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
    this.animal.ownerId = '';

    this.formGroup = this.formBuilder.group({
      code: [this.animal.code, Validators.required],
      breed: [this.animal.breed, Validators.required],
      weigth: [this.animal.weigth, Validators.required],
      datebirth: [this.animal.datebirth, Validators.required],
      type: [this.animal.type, Validators.required],
      status: [this.animal.status, Validators.required],
      origin: [this.animal.origin, Validators.required],
      ownerId: [this.animal.ownerId, Validators.required]
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
    if (this.action === 'Add'){
      this.animal = this.formGroup.value;
      this.animalSerivce.post(this.animal).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Add animal"
      messageBox.componentInstance.message = "Animal registered sucessfully"
      this.animal = p;
      });
    }else{
      this.animal = this.formGroup.value;
    this.animalSerivce.put(this.animal).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Edit animal"
      messageBox.componentInstance.message = "Animal updated sucessfully"
      this.animal = p;
    });
    }
  }

  consultOwners(){
    this.ownerService.get().subscribe(result => {
      this.owners = result;
    });
  }

  edit(){
    if (this.animalCode != null){
      this.action = 'Edit';
      this.animalSerivce.find(this.animalCode).subscribe(result => {
        this.animal = result;
        this.formGroup.patchValue({
          code: result.code,
          breed: result.breed,
          weigth: result.weigth,
          datebirth: result.datebirth,
          type: result.type,
          status: result.status,
          origin: result.origin,
          ownerId: result.ownerId
        });
      })
    }
  }
}
