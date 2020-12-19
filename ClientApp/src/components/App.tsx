import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

// ROUTES
import Contacto from './Contacto/Contacto';
import Contactos from './Contactos/Contactos';

const App: React.FC = function () {
  return (
    <Switch>
      <Route path="/contacts" component={Contactos} exact />
      <Route path="/contacts/:id" component={Contacto} exact />
      <Redirect to="/contacts" from="*" />
    </Switch>
  );
}

export default App;
