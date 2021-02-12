import React from 'react'

const Cita = ({ cita }) => {
    return (
        <div className="bg-primary text-white rounded px-3 py-2 my-3">
            <p className="font-italic font-weight-bold">Mascota: <span className="font-weight-normal">{ cita.mascota }</span></p>
            <p className="font-italic font-weight-bold">Dueño: <span className="font-weight-normal">{ cita.propietario }</span></p>
            <p className="font-italic font-weight-bold">Fecha: <span className="font-weight-normal">{ cita.fecha }</span></p>
            <p className="font-italic font-weight-bold">Hora: <span className="font-weight-normal">{ cita.hora }</span></p>
            <p className="font-italic font-weight-bold">Sintomas: <span className="font-weight-normal">{ cita.sintomas }</span></p>
        </div>
    )
}

export default Cita
