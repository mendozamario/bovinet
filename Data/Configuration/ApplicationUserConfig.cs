using Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configuration
{
    public class ApplicationUserConfig : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            builder.Property(p => p.Id).HasMaxLength(191);
            builder.Property(p => p.UserName).HasMaxLength(15);
            builder.Property(p => p.NormalizedUserName).HasMaxLength(15);
            builder.Property(p => p.PasswordHash).HasMaxLength(191);
            builder.Property(p => p.PhoneNumber).HasMaxLength(10);
            builder.Property(p => p.Email).HasMaxLength(150);
            builder.Property(p => p.NormalizedEmail).HasMaxLength(150);

            builder.HasIndex(p => p.Email).IsUnique();
            builder.HasIndex(p => p.PhoneNumber).IsUnique();
        }
    }
}
