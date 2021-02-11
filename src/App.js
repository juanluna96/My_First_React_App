import React, { Fragment } from 'react'
import Formulario from './components/Formulario'
import './App.css'

function App() {
  return (
    <Fragment>
      <div className="container my-3">
        <h1 className="text-center text-uppercase text-primary">Administrador de pacientes</h1>
        <div className="row my-3">
          <div className="col-md-6">
            <Formulario></Formulario>
          </div>
          <div className="col-md-6">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
