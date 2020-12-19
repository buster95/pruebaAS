import contacto from "./contacto.model";

export default class direccion {
    direccionId?: number;
    contactoId: number = 0;
    direccion: string = '';
    contacto: contacto = new contacto();
}