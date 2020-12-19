using System;
using System.Collections.Generic;

namespace contactsapp.Models {
    public partial class Direccione {
        public int DireccionId { get; set; }
        public int ContactoId { get; set; }
        public string Direccion { get; set; }

        public virtual Contacto Contacto { get; set; }
    }
}