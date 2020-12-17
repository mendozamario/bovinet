using System;
using Entity;
using System.ComponentModel.DataAnnotations;

namespace bovinet.Models 
{
    public class MedicineInputModel
    {
        [Required(ErrorMessage = "Code is required")]
        public string Code { get; set; }
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Type is required")]
        public string Type { get; set; }
        [Required(ErrorMessage = "Expiration date is required")]
        public string ExpirationDate { get; set; }
        [Required(ErrorMessage = "Unit cost is required")]
        public float UnitCost { get; set; }
        [Required(ErrorMessage = "Quantity is required")]
        public int Quantity { get; set; }
    }
    public class MedicineViewModel : MedicineInputModel
    {
        public MedicineViewModel(Medicine medicine)
        {
            Code = medicine.Code;
            Name = medicine.Name;
            Type = medicine.Type;
            ExpirationDate = medicine.ExpirationDate;
            UnitCost = medicine.UnitCost;
            Quantity = medicine.Quantity;
        }
    }
}