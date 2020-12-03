using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class SettlementService
    {
        private readonly BovinetContext _context;
        public SettlementService(BovinetContext context)
        {
            _context = context;
        }
        public SaveSettlementResponse Save(Settlement settlement)
        {
            try
            {
                var settlementSearch = _context.Settlements.Find(settlement.Code);
                if (settlementSearch != null)
                {
                    return new SaveSettlementResponse("This settlement has been registered");
                }
                _context.Settlements.Add(settlement);
                _context.SaveChanges();
                return new SaveSettlementResponse(settlement);
            }
            catch (System.Exception e)
            {
                return new SaveSettlementResponse($"Application Error: {e.Message}");
            }
        }
        public List<Settlement> Consult()
        {
            List<Settlement> settlements = _context.Settlements.ToList();
            return settlements;
        }
        public string Delete(string code)
        {
            try
            {
                var settlement = _context.Settlements.Find(code);
                if (settlement != null)
                {
                    _context.Settlements.Remove(settlement);
                    _context.SaveChanges();
                    return "Settlement has been removed";
                }
                else
                {
                    return "Settlement dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }
    public class SaveSettlementResponse
    {
        public SaveSettlementResponse(string message)
        {
            Message = message;
        }
        public SaveSettlementResponse(Settlement settlement)
        {
            Settlement = settlement;
        }
        public string Message { get; set; }
        public bool Error { get; set; }
        public Settlement Settlement { get; set; }
    }
}
