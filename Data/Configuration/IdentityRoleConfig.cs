using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Configuration
{
    public class IdentityRoleConfig : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.Property(p => p.Name).HasMaxLength(191);
            builder.Property(p => p.NormalizedName).HasMaxLength(191);
            builder.Property(p => p.Id).HasMaxLength(50);
        }
    }
}
