import { NavLink, useNavigate } from "react-router-dom";
import Logo  from "../../../assets/img/lista.png";
import salir from '../../../assets/img/Salir.svg';


export const Cabecera = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={Logo} alt=""  style={{width: "60px"}} /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Inicio</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/tarea"> Tareas </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recursos">Recursos</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="btn btn-outline-info ms-4" > <img src={salir} alt="salir-icon"  style={{height: "1.5rem"}} onClick={handleLogout}/></button>
                    </div>
                </div>
            </nav>

        </>
    );
};