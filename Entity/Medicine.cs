using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Medicine
    {
        [Key]
        public string Code { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string ExpirationDate { get; set; }
        public float UnitCost { get; set; }
        public int Quantity { get; set; }
    }
}
