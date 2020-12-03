import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';
import { OwnerService } from 'src/app/services/owner.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl} from '@angular/forms';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

  formGroup: FormGroup;
  owner: Owner;
  constructor(private ownerService: OwnerService, private formBuilder: FormBuilder, private modalService:NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    this.owner = new Owner();
    this.owner.id = '';
    this.owner.name = '';
    this.owner.mail = '';
    this.owner.password = '';
    this.owner.phonenumber = '';

    this.formGroup = this.formBuilder.group({
      id: [this.owner.id, Validators.required],
      name: [this.owner.name, Validators.required],
      mail: [this.owner.mail, Validators.required],
      password: [this.owner.password, Validators.required],
      phonenumber: [this.owner.phonenumber, Validators.required]
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
    this.owner = this.formGroup.value;
    this.ownerService.post(this.owner).subscribe(p => {
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Add owner"
      messageBox.componentInstance.message = "Owner registered sucessfully"
      this.owner = p;
    }); 
  }
}
