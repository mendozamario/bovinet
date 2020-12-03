using System;
using Entity;
using Data;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class OwnerService
    {
        private readonly BovinetContext _context;
        public OwnerService(BovinetContext context)
        {
            _context = context;
        }
        public SaveOwnerRespone Save(Owner owner)
        {
            try
            {
                var ownerSearch = _context.Owners.Find(owner.Id);
                if (ownerSearch != null)
                {
                    return new SaveOwnerRespone("This owner has been registered");
                }
                _context.Owners.Add(owner);
                _context.SaveChanges();
                return new SaveOwnerRespone(owner);
            }
            catch (System.Exception e)
            {
                return new SaveOwnerRespone($"Application Error: {e.Message}");
            }
        }
        public List<Owner> Consult()
        {
            List<Owner> owners = _context.Owners.ToList();
            return owners;
        }
        public string Delete(string code)
        {
            try
            {
                var owner = _context.Owners.Find(code);
                if (owner != null)
                {
                    _context.Owners.Remove(owner);
                    _context.SaveChanges();
                    return "Owner has been removed";
                }
                else
                {
                    return "Owner dont registered";
                }
            }
            catch (Exception e)
            {
                return $"Application Error: {e.Message}";
            }
        }
    }
    public class SaveOwnerRespone
    {
        public SaveOwnerRespone(String message)
        {
            Error = true;
            Message = message;
        }
        public SaveOwnerRespone(Owner owner)
        {
            Error = false;
            Owner = owner;
        }
        public string Message { get; set; }
        public bool Error { get; set; }
        public Owner Owner { get; set; }
    }
}
