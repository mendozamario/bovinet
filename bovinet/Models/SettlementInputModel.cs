using System;
using Entity;

namespace bovinet.Models
{
    public class SettlementInputModel
    {
        public string Code { get; set; }
        public string SettlementDate { get; set; }
        public float Salary { get; set; }
        public float Discount { get; set; }
        public float Bonus { get; set; }
    }
    public class SettlementViewModel : SettlementInputModel
    {
        public SettlementViewModel(Settlement settlement)
        {
            Code = settlement.Code;
            SettlementDate = settlement.SettlementDate;
            Salary = settlement.Salary;
            Discount = settlement.Discount;
            Bonus = settlement.Bonus;
            Total = settlement.Total;
        }
        public float Total { get; set; }    
    }
}