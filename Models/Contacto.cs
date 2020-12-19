using System;
using System.Collections.Generic;

namespace contactsapp.Models {
    public partial class Contacto {
        public Contacto() {
            Direcciones = new HashSet<Direccione>();
        }

        public int ContactoId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }

        public virtual ICollection<Direccione> Direcciones { get; set; }
    }
}