import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    return (<>
        <div className='navCliente'>
            <NavLink to="">
                Cliente
            </NavLink>

            <NavLink to="proveedor">
                Proveedor
            </NavLink>

            <NavLink to="mercaderia">
                Mercaderia
            </NavLink>
            <Link to="/">
                Cerrar Sesión
            </Link>

        </div>
    </>)
}