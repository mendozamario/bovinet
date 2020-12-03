using System;
using Microsoft.EntityFrameworkCore;
using Entity;

namespace Data
{
    public class BovinetContext : DbContext
    {
        public BovinetContext(DbContextOptions options): base(options){}
        public DbSet<Animal> Animals { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<MedicineApplied> MedicineApplieds { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Settlement> Settlements { get; set; }
    }
}
