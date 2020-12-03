using System;
using Entity;

namespace bovinet.Models 
{
    public class MedicineInputModel
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string ExpirationDate { get; set; }
        public float UnitCost { get; set; }
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