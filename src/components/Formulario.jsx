import React, { Fragment, useState } from 'react'

const Formulario = () => {

    // Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    // Funcion que se ejecuta cada que el usuario escribe en un input

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    return (
        <Fragment>
            <h2 className="text-center">Crear cita</h2>
            <form method="post" action="">
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
