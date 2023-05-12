import { useState } from "react"
import Swal from "sweetalert2"

export const Modal = (props) => {



    const { agregar, tipo, active } = props


    const [nuevoCliente, setNuevoCliente] = useState({
        nombre: "",
        apellido: "",
        telefono: ""
    })

    const [nuevoProveedor, setNuevoProveedor] = useState({
        nombre: "",
        apellido: "",
        telefono: ""
    })



    const handleChange = (evt, tipo) => {
        const { target } = evt;
        const { name, value } = target;
        if (tipo == 'cliente') setNuevoCliente({ ...nuevoCliente, [name]: value })
        if (tipo == 'proveedor') setNuevoProveedor({ ...nuevoProveedor, [name]: value })

    }

    const handleSubmit = (evt) => {

        evt.preventDefault();

    }

    return (
        <>
            <div className={active ? "contenedorModalActive" : "contenedorModal"}>
                {tipo == 'cliente' ?
                    <form className="modal" onSubmit={handleSubmit}>
                        <div className="contenedorInput">
                            <span>Nombre:</span>
                            <input type="text" name="nombre" value={nuevoCliente.nombre} onChange={(evt) => handleChange(evt, tipo)} />
                        </div>
                        <div className="contenedorInput">
                            <span>Apellido:</span>
                            <input type="text" name="apellido" value={nuevoCliente.apellido} onChange={(evt) => handleChange(evt, tipo)} />
                        </div>
                        <div className="contenedorInput">
                            <span>Teléfono:</span>
                            <input type="text" name="telefono" value={nuevoCliente.telefono} onChange={(evt) => handleChange(evt, tipo)} />
                        </div>
                        <button onClick={() => agregar(nuevoCliente)}>Nuevo Cliente</button>

                    </form> : <></>}

                {tipo == 'proveedor' ?
                    <form className="modal" onSubmit={handleSubmit}>
                        <div className="contenedorInput">
                            <span>Nombre:</span>
                            <input type="text" name="nombre" value={nuevoProveedor.nombre} onChange={(evt) => handleChange(evt, tipo)} />
                        </div>
                        <div className="contenedorInput">
                            <span>Apellido:</span>
                            <input type="text" name="apellido" value={nuevoProveedor.apellido} onChange={(evt) => handleChange(evt, tipo)} />
                        </div>
                        <div className="contenedorInput">
                            <span>Teléfono:</span>
                            <input type="text" name="telefono" value={nuevoProveedor.telefono} onChange={(evt) => handleChange(evt, tipo)} />
                        </div>
                        <button onClick={() => agregar(nuevoProveedor)}>Nuevo Proveedor</button>

                    </form> : <></>}
            </div>

        </>
    )
} 