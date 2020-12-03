using System;
using Entity;

namespace bovinet.Models
{
    public class MedicineAppliedInputModel
    {
        public string Code { get; set; }
        public string Type { get; set; }
        public string Date { get; set; }
    }
    public class MedicineAppliedViewModel : MedicineAppliedInputModel
    {
        public MedicineAppliedViewModel(MedicineApplied medicineApplied)
        {
            Code = medicineApplied.Code;
            Type = medicineApplied.Type;
            Date = medicineApplied.Date;
        }
    }
}