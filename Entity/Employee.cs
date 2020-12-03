using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Employee
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string ContractDate { get; set; }
        public float Salary { get; set; }
        public List<Settlement> Settlements { get; set; }
    }
}
