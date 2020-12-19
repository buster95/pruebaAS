using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace contactsapp.Models {
    public partial class contactsDBContext : DbContext {
        public contactsDBContext() { }

        public contactsDBContext(DbContextOptions<contactsDBContext> options) : base(options) { }

        public virtual DbSet<Contacto> Contactos { get; set; }
        public virtual DbSet<Direccione> Direcciones { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseSqlServer("Name=mycon");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Contacto>(entity => {
                entity.ToTable("contactos");

                entity.Property(e => e.ContactoId)
                    .ValueGeneratedNever()
                    .HasColumnName("contactoId");

                entity.Property(e => e.Apellido)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("apellido");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Telefono)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("telefono");
            });

            modelBuilder.Entity<Direccione>(entity => {
                entity.HasKey(e => e.DireccionId)
                    .HasName("PK__direccio__9F5C7CEB0E49AF81");

                entity.ToTable("direcciones");

                entity.Property(e => e.DireccionId)
                    .ValueGeneratedNever()
                    .HasColumnName("direccionId");

                entity.Property(e => e.ContactoId).HasColumnName("contactoId");

                entity.Property(e => e.Direccion)
                    .IsRequired()
                    .HasMaxLength(500)
                    .IsUnicode(false)
                    .HasColumnName("direccion");

                entity.HasOne(d => d.Contacto)
                    .WithMany(p => p.Direcciones)
                    .HasForeignKey(d => d.ContactoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__direccion__conta__38996AB5");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}