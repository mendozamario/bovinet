using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class MedicineApplied
    {
        [Key]
        public int Id { get; set; }
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        [ForeignKey("MedicineCode")]
        public Medicine Medicine { get; set; }
        public string MedicineCode { get; set; }
        public string AnimalCode { get; set; }
    }
}
