using System;
using Entity;

namespace bovinet.Models
{
    public class EmployeeInputModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string ContractDate { get; set; }
        public float Salary { get; set; }
    }
    public class EmployeeViewModel : EmployeeInputModel
    {
        public EmployeeViewModel(Employee employee)
        {
            Id = employee.Id;
            Name = employee.Name;
            Position = employee.Position;
            ContractDate = employee.ContractDate;
            Salary = employee.Salary;
        }
    }
}
