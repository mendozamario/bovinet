using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class EmployeeService
    {
        private readonly BovinetContext _context;
        public EmployeeService(BovinetContext context)
        {
            _context = context;
        }
        public SaveEmployeeResponse Save(Employee employee)
        {
            try
            {
                var employeeSearch = _context.Employees.Find(employee.Id);
                if (employeeSearch != null)
                {
                    return new SaveEmployeeResponse("Error, employee has been registered");
                }
                _context.Employees.Add(employee);
                _context.SaveChanges();
                return new SaveEmployeeResponse(employee);
            }
            catch (System.Exception e)
            {
                return new SaveEmployeeResponse($"Aplication Error: {e.Message}");
            }
        }
        public List<Employee> Consult()
        {
            List<Employee> employees = _context.Employees.ToList();
            return employees;
        }
        public string Delete(string code)
        {
            try
            {
                var employee = _context.Employees.Find(code);
                if (employee != null)
                {
                    _context.Employees.Remove(employee);
                    _context.SaveChanges();
                    return "Employee has been removed";
                }
                else
                {
                    return "Employee dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }
    public class SaveEmployeeResponse
    {
        public SaveEmployeeResponse(Employee employee)
        {
            Error = false;
            Employee = employee;
        }
        public SaveEmployeeResponse(string message)
        {
            Error = true;
            Message = message;
        }
        public string Message { get; set; }
        public bool Error { get; set; }
        public Employee Employee { get; set; }
    }
}
