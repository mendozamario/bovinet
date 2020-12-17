using Data.Configuration;
using Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class BovinetContext : IdentityDbContext<ApplicationUser>
    {
        public BovinetContext(DbContextOptions<BovinetContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new ApplicationUserConfig());
            builder.ApplyConfiguration(new UserLoginConfig());
            builder.ApplyConfiguration(new IdentityUserTokenConfig());
            builder.ApplyConfiguration(new IdentityRoleConfig());
        }

        public DbSet<Animal> Animals { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<MedicineApplied> MedicineApplieds { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Settlement> Settlements { get; set; }
    }
}
