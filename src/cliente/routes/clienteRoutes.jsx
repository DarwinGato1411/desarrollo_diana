import { Navigate, Route, Routes } from 'react-router-dom';
import { Clientes, Proveedor, Mercaderia } from '../pages'
import { NavBar } from '../components/NavBar'
import '../../styles/cliente.css'

export const ClienteRoutes = () => {
    return (
        <>
            <div className='contenedorClientePrincipal'>
                <div className='banner'>Logo</div>
                <div className='contenedorC'>
                    <NavBar />
                    <div className="containerCliente">
                        <Routes>
                            <Route path="/" element={<Clientes />} />
                            <Route path="/proveedor" element={<Proveedor />} />
                            <Route path="/mercaderia" element={<Mercaderia />} />

                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

