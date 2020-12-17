import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from '../models/animal';

@Pipe({
  name: 'animalFilter'
})
export class AnimalFilterPipe implements PipeTransform {

  transform(animals: Animal[], searchText: string): unknown {
    if (searchText == null) return animals;
    return animals.filter(p => 
      p.code.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
  }

}
