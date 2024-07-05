import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/views/Inicio";
import { Login } from "../../componentes/views/Login";
import { Tareas } from "../../componentes/tareas/tareas";
import { Recursos } from "../../componentes/recursos/Recursos";
import PrivateRoute from "../privateRoutes/PrivateRoutes";

export const Ruteo = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Inicio />} />
                <Route path="/tarea" element={<Tareas />} />
                <Route path="/recursos" element={<Recursos />} />
            </Routes>
        </>
    );
};