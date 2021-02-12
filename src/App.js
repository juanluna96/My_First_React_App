import React, { Fragment, useState } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'
import './App.css'

function App() {
  // Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  // Funcion que tome las citas actuales y agregue la 

  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  // Funcion que elimina una cita por su ID

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  // Mensaje condicional citas
  const titulo = citas.length === 0 ? 'No hay citas, agrega alguna...' : 'Administra tus citas';

  return (
    <Fragment>
      <div className="container my-3">
        <h1 className="text-center text-uppercase text-primary">Administrador de pacientes</h1>
        <div className="row my-3">
          <div className="col-md-6">
            <Formulario crearCita={ crearCita }></Formulario>
          </div>
          <div className="col-md-6">
            <h2 className="text-center mb-4">{ titulo }</h2>
            <div className="overflow-auto" style={ { maxHeight: "570px" } }>
              { citas.map(cita => (
                <Cita key={ cita.id } cita={ cita } eliminarCita={ eliminarCita }></Cita>
              )) }
            </div>
          </div>
        </div>
      </div>
    </Fragment >
  );
}

export default App;
