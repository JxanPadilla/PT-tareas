import imgLogin  from "../../../assets/img/tasklist.jpg"
import inicioS  from "../../../assets/img/Inicio.svg"
import registro  from "../../../assets/img/Registro.svg"
import user from "../../../assets/img/Usuario.svg"
import userLogin from "../../../assets/img/Login.svg"
import logo from "../../../assets/img/lista.png"
import correo from "../../../assets/img/Correo.svg"
import '../../../index.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Swal from "sweetalert2"


export const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '', confirmPassword: '' });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'warning',
            title: 'alerta',
            text: 'Debes registrarte',
        });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas deben coincidir',
            });
        } else {
            navigate('/home');
        }
    };

    return (
        <>
            <div className="d-flex bg-cyan-200 align-items-center justify-content-center vh-100">
            <div className="bg-white p-5 rounded-lg shadow-lg" style={{width: "40rem"}}>
                <div className="d-flex rounded-s justify-content-center">
                    <img src={imgLogin} alt="login-img" className="imgLogo shadow-lg" />
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column p-5">
                    <h1 className="text-dark mt-1 text-center fs-1 fw-semibold">
                        Bienvenido a <span className="text-primary">Task List</span>
                    </h1>
                    <p className="text-muted mb-5 text-center fs-6">
                        Sistema para administrar tus actividades
                    </p>

                    <div className="btn-group mb-3">
                        <div className="d-flex justify-content-center align-items-center btn-group-text">
                            <img src={inicioS} alt="inicio-icon" style={{height: "2.5rem"}} />
                        </div>
                        <div className="btn btn-outline-primary ms-1 fs-4" data-bs-toggle="modal" data-bs-target="#LoginModal" data-bs-whatever="@mdo" style={{width: "20rem"}}>Iniciar Sesion</div>
                    </div>
                    <div className="btn-group">
                        <div className="d-flex justify-content-center align-items-center btn-group-text">
                            <img src={registro} alt="registro-icon" style={{height: "2.5rem"}} />
                        </div>
                        <div className="btn btn-outline-info ms-1 fs-4" data-bs-toggle="modal" data-bs-target="#RegistroModal" data-bs-whatever="@mdo" style={{width: "20rem"}}>Registrarse</div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <img src={logo} alt="logo" style={{height: "2.5rem"}} />
                            </div>
                            <h1 className="modal-title fs-5 ms-2" id="LoginModalLabel">Iniciar <span className="text-primary">Sesion</span></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center mb-5">
                                <img src={userLogin} alt="user-icon" style={{height: "7rem"}} />
                            </div>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="input-group mb-3">
                                    <div className="d-flex justify-content-center align-items-center input-group-text">
                                        <img src={user} alt="inicio-icon" style={{height: "2rem"}} />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control fs-5"
                                        name="username"
                                        placeholder="Usuario"
                                        value={loginData.username}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="d-flex justify-content-center align-items-center input-group-text">
                                        <img src={inicioS} alt="inicio-icon" style={{height: "2rem"}} />
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control fs-5"
                                        name="password"
                                        placeholder="Contraseña"
                                        value={loginData.password}
                                        onChange={handleLoginChange}
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" className="btn btn-primary">Ingresar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="RegistroModal" tabIndex="-1" aria-labelledby="RegistroModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-cyan-200">
                            <div>
                                <img src={logo} alt="logo" style={{height: "2.5rem"}} />
                            </div>
                            <h1 className="modal-title fs-5 ms-2" id="RegistroModalLabel"><span className="text-primary">Registro</span></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="d-flex justify-content-center mb-5">
                                <img src={registro} alt="user-icon" style={{height: "7rem"}} />
                            </div>
                            <form onSubmit={handleRegisterSubmit}>
                                <label htmlFor="username" className="col-form-label">Ingresa tu nombre de usuario:</label>
                                <div className="input-group mb-3">
                                    <div className="d-flex justify-content-center align-items-center input-group-text">
                                        <img src={user} alt="inicio-icon" style={{height: "2rem"}} />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control fs-5"
                                        name="username"
                                        placeholder="Usuario"
                                        value={registerData.username}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <label htmlFor="email" className="col-form-label">Ingresa tu correo:</label>
                                <div className="input-group mb-3">
                                    <div className="d-flex justify-content-center align-items-center input-group-text">
                                        <img src={correo} alt="inicio-icon" style={{height: "2rem"}} />
                                    </div>
                                    <input
                                        type="email"
                                        className="form-control fs-5"
                                        name="email"
                                        placeholder="Correo"
                                        value={registerData.email}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <label htmlFor="password" className="col-form-label">Ingresa tu contraseña:</label>
                                <div className="input-group mb-3">
                                    <div className="d-flex justify-content-center align-items-center input-group-text">
                                        <img src={inicioS} alt="inicio-icon" style={{height: "2rem"}} />
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control fs-5"
                                        name="password"
                                        placeholder="Contraseña"
                                        value={registerData.password}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <label htmlFor="confirmPassword" className="col-form-label">Confirma tu contraseña:</label>
                                <div className="input-group mb-3">
                                    <div className="d-flex justify-content-center align-items-center input-group-text">
                                        <img src={inicioS} alt="inicio-icon" style={{height: "2rem"}} />
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control fs-5"
                                        name="confirmPassword"
                                        placeholder="Confirmar contraseña"
                                        value={registerData.confirmPassword}
                                        onChange={handleRegisterChange}
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" className="btn btn-primary">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};