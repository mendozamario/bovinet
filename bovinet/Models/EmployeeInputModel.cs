using System;
using System.ComponentModel.DataAnnotations;
using Entity;

namespace bovinet.Models
{
    public class EmployeeInputModel
    {
        [Required(ErrorMessage = "El ID  es requerido")]
        public string Id { get; set; }
        [Required(ErrorMessage = "El nombre es requerido")]
        public string Name { get; set; }
        [Required(ErrorMessage = "La posición es requerida")]
        public string Position { get; set; }
        [Required(ErrorMessage = "La fecha es requerida")]
        public string ContractDate { get; set; }
        [Range(0, 9999999999999, ErrorMessage = "El salario debe ser mayor que 0")]
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
