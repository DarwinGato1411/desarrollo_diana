import { useEffect, useState } from 'react';
import { ListaProveedores } from '../components/proveedores/listaProveedores'
import { FiltroCliente } from '../components/clientes/filtroBusqueda';
import { Modal } from '../components/ui/modal';
import Swal from 'sweetalert2';

export const Proveedor = () => {

    const proveedorDatos = [
        {
            nombre: "Matias",
            apellido: "Matias",
            telefono: "098765431"
        }, {
            nombre: "Matias",
            apellido: "Carlosama",
            telefono: "098765431"
        }, {
            nombre: "Matias",
            apellido: "Carlosama",
            telefono: "098765431"
        }, {
            nombre: "Matias",
            apellido: "Carlosama",
            telefono: "098765431"
        }
    ]

    const [proveedor, setDatosProveedor] = useState([]);
    const [modelActive, setModalActive] = useState(false)

    useEffect(() => {
        setDatosProveedor(proveedorDatos)
    }, []);

    const agregar = (nuevoProveedor) => {
        Swal.fire({
            icon: 'success',
            title: 'OK!',
            text: 'Cliente agregado con éxito',

        })
        setDatosProveedor([...proveedor, nuevoProveedor])
        setModalActive(false)
    }

    const modalEstado = () => {
        setModalActive(true)
    }

    return (<>
        <h1>Lista Proveedores</h1>
        <button onClick={modalEstado}>Nuevo Proveedor</button>
        <br />
        <br />

        <Modal active={modelActive} tipo='proveedor' agregar={agregar} />
        <FiltroCliente></FiltroCliente>
        <ListaProveedores
            proveedor={proveedor}
        />
    </>)
}