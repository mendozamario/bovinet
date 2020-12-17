import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employee: Employee[], searchText: string): unknown {
    if (searchText == null) return employee;
    return employee.filter(p => 
      p.id.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
  }
}
