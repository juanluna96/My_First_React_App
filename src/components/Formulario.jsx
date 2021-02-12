import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4'

const Formulario = () => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada que el usuario escribe en un input

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();

        // Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        // Eliminar el mensaje previo
        actualizarError(false);

        // Asignar un id
        cita.id = uuid();

        // Crear la cita

        // Reiniciar el form
    }

    return (
        <Fragment>
            <h2 className="text-center">Crear cita</h2>

            {
                error
                    ?
                    <div className="alert alert-danger" role="alert">
                        Todos los campos son obligatorios
                    </div>
                    :
                    null
            }
            <form onSubmit={ submitCita }>
                <div className="form-group">
                    <label htmlFor="mascota">Nombre mascota</label>
                    <input id="mascota" className="form-control" type="text" name="mascota" onChange={ actualizarState } value={ mascota } />
                </div>
                <div className="form-group">
                    <label htmlFor="propietario">Nombre dueño</label>
                    <input id="propietario" className="form-control" type="text" name="propietario" onChange={ actualizarState } value={ propietario } />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha</label>
                    <input id="fecha" className="form-control" type="date" name="fecha" onChange={ actualizarState } value={ fecha } />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora</label>
                    <input id="hora" className="form-control" type="time" name="hora" onChange={ actualizarState } value={ hora } />
                </div>
                <div className="form-group">
                    <label htmlFor="sintomas">Síntomas</label>
                    <textarea id="sintomas" className="form-control" name="sintomas" rows="3" onChange={ actualizarState } value={ sintomas } ></textarea>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Agendar cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
