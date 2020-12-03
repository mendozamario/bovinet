using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Product
    {
        [Key]
        public string Code { get; set; }
        public float LiterCost { get; set; }
        public int Quantity { get; set; }
        public string Date { get; set; }
    }
}
