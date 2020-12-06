using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Settlement
    {
        [Key]
        public string Code { get; set; }
        public string SettlementDate { get; set; }
        public float Salary { get; set; }
        public float Discount { get; set; }
        public float Bonus { get; set; }
        public float Total { get; set; }
        [ForeignKey("EmployeeId")]
        public string EmployeeId { get; set; }
        public void CalculateSalary()
        {
            Total = Salary - Discount + Bonus;
        }
    }
}
