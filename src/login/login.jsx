import { Link } from 'react-router-dom'
import wave from '../assets/img/wave.png'
import job from '../assets/img/job.png'
import '../styles/login.css'
export const Login = () => {
    return (
        <>
            {/* <h1>Login</h1>
            <div className="contenedorLogin">
                <div>
                    <input type="text" />
                    <input type="text" name="" id="" />
                   
                </div>
            </div> */}
            <div className="containerLogin">
                <img className="wave" src={wave} />
                <div className="container">
                    <div className="img">
                        <img src={job} />
                    </div>
                    <div className="login-content">
                        <div className="login empresa" >

                            <span className="title">Empresa</span>
                            <div className="input-div one">
                                <div className="i">

                                </div>
                                <div className="div">
                                    <span>Usuario</span>
                                    <input
                                        className="input"
                                        type='text'
                                    />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">

                                </div>
                                <div className="div">
                                    <span>Contraseña</span>
                                    <input
                                        type="password"
                                        className="input"
                                        id="password"
                                    />
                                </div>
                            </div>
                            <br />
                            <Link className="btn"
                                to="/cliente"   >
                                Iniciar Sesión
                            </Link>
                            <Link className="btn" to="/inicio">
                                Volver principal
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

