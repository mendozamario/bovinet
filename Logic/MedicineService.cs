using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class MedicineService
    {
        private readonly BovinetContext _context;
        public MedicineService(BovinetContext context)
        {
            _context = context;
        }
        public SaveMedicineResponse Save(Medicine medicine)
        {
            try
            {
                var searchMedicine = _context.Medicines.Find(medicine.Code);
                if (searchMedicine != null)
                {
                    return new SaveMedicineResponse("This medicine has been registered");
                }      
                _context.Medicines.Add(medicine);
                _context.SaveChanges();
                return new SaveMedicineResponse(medicine);
            }
            catch (System.Exception e)
            {
                return new SaveMedicineResponse($"Application Error: {e.Message}");
            }
        }
        public List<Medicine> Consult()
        {
            List<Medicine> medicines = _context.Medicines.ToList();
            return medicines;
        }
        public string Delete(string code)
        {
            try
            {
                var medicine = _context.Medicines.Find(code);
                if (medicine != null)
                {
                    _context.Medicines.Remove(medicine);
                    _context.SaveChanges();
                    return "Medicine has been removed";
                }
                else
                {
                    return "Medicine dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }
    public class SaveMedicineResponse 
    {
        public SaveMedicineResponse(string message)
        {
            Error = true;
            Message = message;
        }
        public SaveMedicineResponse(Medicine medicine)
        {
            Error = false;
            Medicine = medicine;
        }
        public string Message { get; set; }
        public bool Error { get; set; }
        public Medicine Medicine { get; set; }
    }
}
