import { useEffect, useState } from 'react';
import { ListaClientes } from '../components/clientes/listaClientes'
import { FiltroCliente } from '../components/clientes/filtroBusqueda';
import { Modal } from '../components/ui/modal'
import Swal from 'sweetalert2';

export const Clientes = () => {

    const clienteDatos = [
        {
            nombre: "Tomas",
            apellido: "Carlosama",
            telefono: "098765431"
        }, {
            nombre: "Tomas",
            apellido: "Carlosama",
            telefono: "098765431"
        }, {
            nombre: "Tomas",
            apellido: "Carlosama",
            telefono: "098765431"
        }, {
            nombre: "Tomas",
            apellido: "Carlosama",
            telefono: "098765431"
        }
    ]

    const [cliente, setDatosCliente] = useState([]);
    const [modelActive, setModalActive] = useState(false)

    useEffect(() => {
        setDatosCliente(clienteDatos)
    }, []);



    const agregar = (nuevoCliente) => {
        Swal.fire({
            icon: 'success',
            title: 'OK!',
            text: 'Cliente agregado con éxito',
            
        })
        setDatosCliente([...cliente, nuevoCliente])
        setModalActive(false)
    }

    const modalEstado = () => {
        setModalActive(true)
    }


    return (<>
        <h1 >Lista Clientes</h1>
        <button onClick={modalEstado}>Nuevo Cliente</button>
        <br />
        <br />
        <Modal active={modelActive} tipo='cliente' agregar={agregar} />
        <FiltroCliente></FiltroCliente>
        <ListaClientes cliente={cliente} />
    </>)
}