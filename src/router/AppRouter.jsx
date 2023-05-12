import { Navigate, Route, Routes } from "react-router-dom"
import { LandingRoutes } from '../landing'
import {Login} from '../login/login'
import {ClienteRoutes} from '../cliente/routes/clienteRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="inicio/*" element={<LandingRoutes />} />
                <Route path="login" element={<Login />} />
                <Route path="cliente/*" element={<ClienteRoutes />} />
                <Route path="/" element={<Navigate to={"/login"} />} />
            </Routes>
        </>
    )
}