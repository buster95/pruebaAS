using System.Linq;
using contactsapp.Models;
using Microsoft.AspNetCore.Mvc;

namespace contactsapp.Controllers {

    [Route("api/v1/[controller]")]
    public class ContactoController : Controller {
        private contactsDBContext dbctx;

        public ContactoController(contactsDBContext _dbctx) {
            dbctx = _dbctx;
        }

        [HttpGet]
        public IActionResult Get() {
            //TODO: Implement Realistic Implementation
            return Json(dbctx.Contactos.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] string id) {
            //TODO: Implement Realistic Implementation
            int idNumber;
            if (int.TryParse(id, out idNumber)) {
                var contacto = dbctx.Contactos.FirstOrDefault(x => x.ContactoId == idNumber);
                if (contacto != null) {
                    return Json(contacto);
                }
                return Json(new { message = $"Contacto no existe" });
            }
            return Json(new { message = $"No es un id valido" });
        }

        [HttpPost]
        public IActionResult Post([FromBody] Contacto model) {
            //TODO: Implement Realistic Implementation
            var created = dbctx.Add(model);
            dbctx.SaveChanges();
            return Json(created);
        }

        [HttpPut("{id}")]
        public IActionResult Put([FromRoute] string id, [FromBody] Contacto model) {
            //TODO: Implement Realistic Implementation
            int idNumber;
            if (int.TryParse(id, out idNumber)) {
                var contacto = dbctx.Contactos.FirstOrDefault(x => x.ContactoId == idNumber);
                model.ContactoId = idNumber;
                dbctx.Update(contacto);
                dbctx.SaveChanges();
                if (contacto != null) {
                    return Json(contacto);
                }
                return Json(new { message = $"Contacto no existe" });
            } else {
                return Json(new { message = $"No es un id valido" });
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] string id) {
            //TODO: Implement Realistic Implementation
            int idNumber;
            if (int.TryParse(id, out idNumber)) {
                var contacto = dbctx.Contactos.FirstOrDefault(x => x.ContactoId == idNumber);
                dbctx.Remove(contacto);
                dbctx.SaveChanges();
                if (contacto != null) {
                    return Json(contacto);
                }
                return Json(new { message = $"Contacto no existe" });
            } else {
                return Json(new { message = $"No es un id valido" });
            }
        }
    }
}