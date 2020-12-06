using System;
using Entity;

namespace bovinet.Models
{
    public class MedicineAppliedInputModel
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
    }
    public class MedicineAppliedViewModel : MedicineAppliedInputModel
    {
        public MedicineAppliedViewModel(MedicineApplied medicineApplied)
        {
            Id = medicineApplied.Id;
            Date = medicineApplied.Date;
        }
    }
}