import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: ['./view-animals.component.css']
})
export class ViewAnimalsComponent implements OnInit {

  searchText: string;
  animals: Animal[];
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.consultAnimal();
  }

  consultAnimal(){
    this.animalService.get().subscribe(result => {
      this.animals = result;
    });
  }

  deleteAnimal(code: string){
    this.animalService.delete(code).subscribe(data => {
      alert("Animal eliminado correctamente");
      this.consultAnimal();
    });
  }

}