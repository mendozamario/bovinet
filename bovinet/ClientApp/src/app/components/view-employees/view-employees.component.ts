import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.consultEmployee();
  }

  consultEmployee(){
    this.employeeService.get().subscribe(result => {
      this.employees = result;
    });
  }

  deleteEmployee(id: string){
    this.employeeService.delete(id).subscribe(result => {
      alert("Employee deleted");
      this.consultEmployee();
    })
  }
}
