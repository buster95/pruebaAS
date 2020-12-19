import React, { useEffect, useState } from 'react';
import './Contactos.css';

import AddIcon from '@material-ui/icons/AddRounded';
import EditIcon from '@material-ui/icons/EditRounded';
import RemoveIcon from '@material-ui/icons/DeleteRounded';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import contactosService from '../../Services/contactos.service';
import contacto from '../../Models/contacto.model';
import Grid from '@material-ui/core/Grid';
import { Card, CardHeader } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddContacto from '../AddContacto/AddContacto';

const Contactos: React.FC = () => {
  const [contactos, setContactos] = useState<contacto[]>([]);
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    contactosService.get().then(data => {
      setContactos(data);
    });
  }, []);

  function handleOpenAdd() {
    setOpenAdd(true);
  }

  function handleOnCloseAdd(value?: contacto) {
    if (value) {
      console.log(value);
      setContactos([...contactos, value]);
    }
    setOpenAdd(false);
  }

  return (
    <div className="Contactos">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Lista de Contactos
          </Typography>

          <IconButton aria-label="settings" onClick={handleOpenAdd}>
            <AddIcon style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <AddContacto open={openAdd} onClose={handleOnCloseAdd} />

      <div className="container">
        {contactos.map((item, index) => (
          <Card style={{ marginBottom: 20 }} key={index}>
            <CardHeader title={`${item.nombre} ${item.apellido}`} subheader={item.telefono}
              action={
                <div>
                  <IconButton aria-label="settings">
                    <EditIcon />
                  </IconButton>

                  <IconButton aria-label="settings">
                    <RemoveIcon />
                  </IconButton>
                </div>
              } />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Contactos;
