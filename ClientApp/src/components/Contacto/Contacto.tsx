import React from 'react';
import { useParams } from 'react-router-dom';
import './Contacto.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Contacto: React.FC = () => {
  const { id } = useParams<{ id: string }>();


  return (
    <div className="Contacto">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Contacto {id}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Contacto;
