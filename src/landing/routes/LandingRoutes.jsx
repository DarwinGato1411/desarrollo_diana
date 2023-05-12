import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar'
import {Footer} from '../components/footer'
import { Inicio, Nosotros, Asociacion, Servicios } from '../pages'


export const LandingRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="containerLanging">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/asociacion" element={<Asociacion />} />
                    <Route path="/servicios" element={<Servicios />} />
                </Routes>
            </div>
            <Footer/>
            
        </>
    )
}

