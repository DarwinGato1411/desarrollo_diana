import { Link, NavLink, useNavigate } from 'react-router-dom';

export const NavBar = () => {

    const navigate = useNavigate();

    return (

        <>
            <header className="site-header">
                <div className="contenedor">
                    <div className="barra">
                        <a href="">
                            <h1 className="no-margin">Lorem <span>ipsum</span></h1>
                        </a>
                        <nav className="navegacion">
                            <NavLink to="">
                                Inico
                            </NavLink>
                            <NavLink to="asociacion">
                                Asociación
                            </NavLink>
                            <NavLink to="nosotros">
                                Nosotros
                            </NavLink>
                            <NavLink to="servicios">
                                Contacto
                            </NavLink>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </nav>
                    </div>
                    <div className="texto-header">
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </header>


        </>
    )
}

