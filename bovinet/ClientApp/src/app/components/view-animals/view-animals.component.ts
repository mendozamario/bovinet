import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OwnerService } from 'src/app/services/owner.service';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.css']
})
export class ViewAnimalsComponent implements OnInit {

  userId: string;
  isAdmin = false;
  animals: Animal[];
  consultAnimals: Animal[];
  constructor(private animalService: AnimalService, private authenticationService: AuthenticationService, private ownerService:OwnerService) { }

  ngOnInit(): void {
    this.consultAnimal();
    this.loadData();
  }

  consultAnimal(){
    this.animalService.get().subscribe(result => {
      this.animals = result;
    });

    if (this.isAdmin){
      this.consultAnimals = this.animals;
    }else{
      this.animals.forEach(element => {
        if (element.ownerId === this.userId){
          this.consultAnimals.push(element);
        }
      });
    }
  }

  deleteAnimal(code: string){
    this.animalService.delete(code).subscribe(data => {
      alert("Animal eliminado correctamente");
      this.consultAnimal();
    });
  }

  loadData() {
    const user = this.authenticationService.getCurrentUser();
    this.userId = user.id;
    this.ownerService.getId(user.id).subscribe(result => {
      this.isAdmin = result.type === 'Administrative';
    })
  }

}
