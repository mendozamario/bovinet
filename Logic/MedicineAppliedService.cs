using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class MedicineAppliedService
    {
        private readonly BovinetContext _context;
        public MedicineAppliedService(BovinetContext context)
        {
            _context = context;
        }
        public SaveMedicineAppliedResponse Save(MedicineApplied medicineApplied)
        {
            try
            {
                var searchMedicineApplied = _context.MedicineApplieds.Find(medicineApplied.Id);
                if (searchMedicineApplied != null)
                {
                    return new SaveMedicineAppliedResponse("Meddicine applied has been registered");
                }
                _context.MedicineApplieds.Add(medicineApplied);
                _context.SaveChanges();
                return new SaveMedicineAppliedResponse(medicineApplied);
            }
            catch (System.Exception e)
            {
                return new SaveMedicineAppliedResponse($"Aplication Error: {e.Message}");
            }
        }
        public List<MedicineApplied> Consult()
        {
            List<MedicineApplied> medicineApplieds = _context.MedicineApplieds.ToList();
            return medicineApplieds;
        }
        public string Delete(string code)
        {
            try
            {
                var medicineApplied = _context.MedicineApplieds.Find(code);
                if (medicineApplied != null)
                {
                    _context.MedicineApplieds.Remove(medicineApplied);
                    _context.SaveChanges();
                    return "Medicine applied has been removed";
                }
                else
                {
                    return "Medicine applied dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }
    public class SaveMedicineAppliedResponse
    {
        public SaveMedicineAppliedResponse(string message)
        {
            Error = true;
            Message = message;
        }
        public SaveMedicineAppliedResponse(MedicineApplied medicineApplied)
        {
            Error = false;
            MedicineApplied = medicineApplied;
        }
        public string Message { get; set; }
        public bool Error { get; set; }
        public MedicineApplied MedicineApplied { get; set; }
    }
}
