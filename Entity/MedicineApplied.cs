using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class MedicineApplied
    {
        [Key]
        public string Code { get; set; }
        public string Type { get; set; }
        public string Date { get; set; }
    }
}
