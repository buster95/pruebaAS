import React, { useState } from 'react';
import './AddContacto.css';

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import contacto from '../../Models/contacto.model';
import contactosService from '../../Services/contactos.service';

interface myprops {
  open: boolean;
  onClose: (value?: contacto) => void;
}

const AddContacto: React.FC<myprops> = (props) => {
  const { open, onClose } = props;

  const [contact, setContact] = useState<contacto>(new contacto());

  function handleTextChanges(e) {
    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value } as contacto)
  }

  async function handleOnSubmit(e) {
    try {
      e.preventDefault();
      const value = await contactosService.save(contact);
      onClose(value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <form onSubmit={handleOnSubmit}>
        <DialogTitle>Agregar Nuevo Contacto</DialogTitle>

        <DialogContent>
          <TextField label="Nombre" name="nombre" value={contact.nombre} onChange={handleTextChanges} variant="outlined" size="small" fullWidth />
          <br />
          <br />

          <TextField label="Apellido" name="apellido" value={contact.apellido} onChange={handleTextChanges} variant="outlined" size="small" fullWidth />
          <br />
          <br />

          <TextField label="Telefono" name="telefono" value={contact.telefono} onChange={handleTextChanges} variant="outlined" size="small" fullWidth />
          <br />
          <br />
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="primary" type="submit">Aceptar</Button>
          <Button onClick={() => onClose()}>Cancelar</Button>
        </DialogActions>
      </form>
    </Dialog >
  );
}

export default AddContacto;
