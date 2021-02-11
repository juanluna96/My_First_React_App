import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h2 className="text-center">Crear cita</h2>
            <form method="post" action="">
                <div className="form-group">
                    <label htmlFor="mascota">Nombre mascota</label>
                    <input id="mascota" className="form-control" type="text" name="mascota" />
                </div>
                <div className="form-group">
                    <label htmlFor="propietario">Nombre dueño</label>
                    <input id="propietario" className="form-control" type="text" name="propietario" />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha">Fecha</label>
                    <input id="fecha" className="form-control" type="date" name="fecha" />
                </div>
                <div className="form-group">
                    <label htmlFor="hora">Hora</label>
                    <input id="hora" className="form-control" type="time" name="hora" />
                </div>
                <div className="form-group">
                    <label htmlFor="sintomas">Síntomas</label>
                    <textarea id="sintomas" className="form-control" name="sintomas" rows="3"></textarea>
                </div>
                <button className="btn btn-primary btn-block" type="submit">Agendar cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
