import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (<>
        <footer className="site-footer">
            <div className="contenedor">
                <div className="barra">
                    <p className="no-margin">Lorem<span>Lipsum</span></p>
                    <nav className="navegacion">
                        <NavLink className="nav-link" to="/">
                            Inico
                        </NavLink>
                        <NavLink className="nav-link" to="asociacion">
                            Asociación
                        </NavLink>
                        <NavLink className="nav-link" to="nosotros">
                            Nosotros
                        </NavLink>
                        <NavLink to="servicios">
                            Contacto
                        </NavLink>
                    </nav>
                </div>
            </div>
        </footer>
    </>)
}