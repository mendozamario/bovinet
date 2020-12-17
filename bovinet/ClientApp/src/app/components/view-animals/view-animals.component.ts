import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { AnimalSignalRService } from 'src/app/services/animal-signal-r.service';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-view-animals',
  templateUrl: './view-animals.component.html',
  styleUrls: [ './view-animals.component.css' ]
})
export class ViewAnimalsComponent implements OnInit {
  searchText: string;
  animals: Animal[] = [];
  constructor(private animalService: AnimalService, private animalSignalR: AnimalSignalRService) {}

  ngOnInit(): void {
    this.consultAnimal();
    this.animalSignalR.startConnection();

    this.animalSignalR.newAnimal.subscribe((animal: Animal) => {
      this.animals.push(animal);
    });

    this.animalSignalR.deleteAnimal.subscribe((identification: string) => {
      this.animals = this.animals.filter((a) => a.code !== identification);
    });
  }

  consultAnimal() {
    this.animalService.get().subscribe((result) => {
      this.animals = result;
    });
  }

  deleteAnimal(code: string) {
    this.animalService.delete(code).subscribe((data) => {
      alert('Animal eliminado correctamente');
      this.consultAnimal();
    });
  }
}
