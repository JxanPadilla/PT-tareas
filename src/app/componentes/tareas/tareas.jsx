import '../../../index.css'
import tareaImg from '../../../assets/img/lista.png'
import task from '../../../assets/img/tasklist.jpg'
import { useState, React } from 'react';

export const Tareas = () => {
    const tareaInicial = {
        id:'',
        title:'',
        descripcion:'',
        recursos:''
    }
    const [tareas, setTareas]= useState([
        {id:1, titulo:'tarea1', descripcion:'prueba1', recursos: '1'},
        {id:2, titulo:'tarea3', descripcion:'prueba2', recursos: '2'},
        {id:3, titulo:'tarea4', descripcion:'prueba3', recursos: '3'},
        {id:4, titulo:'tarea5', descripcion:'prueba4', recursos: '4'},
    ]);

    const [tarea, setTarea]= useState(tareaInicial);
    const [ediTarea, SetEdiTarea] = useState(tareaInicial)

    const agregar = (e) =>{
        e.preventDefault();
        setTareas([
            ...tareas,
            {
                ...tarea,
                id: tareas.length > 0 ? Math.max(...tareas.map(tarea=>tarea.id)) + 1 : 1
            }
        ])
    }
    const eliminar = (id) =>{
        const newTareas = tareas.filter(tarea=> id !== tarea.id)
        setTareas(newTareas)
    }
    const buscarTarea = (id) =>{
        const eTarea = tareas.filter(tarea => id == tarea.id)[0]
        SetEdiTarea(eTarea)
    }
    const editar = (id) =>{
        setTareas(tareas.map(tarea => (id === tarea.id ? ediTarea : tarea)));
    }
    return(
        <>
            <div className='contTitulo'>
                    <h1 className="text-8xl">Lista de tareas</h1>
            </div>
            <div className='container mb-3'>
                <button className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#AgregarTareaModal">Agregar</button>
            </div>
            <div className='container'>
                <div className='row justify-content-around'>
                    {
                        tareas.map(tarea=>{
                            return <div key={tarea.id} className="card mb-5" style={{width: "18rem"}}>
                                        <div className="card-body">
                                            <h5 className="card-title fs-2">{tarea.titulo}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Usuario</h6>
                                            <p className="card-text">{tarea.descripcion}</p>
                                            <p className="card-text">{tarea.recursos}</p>
                                            <a href="#" className="btn btn-outline-primary " data-bs-toggle="modal" data-bs-target="#EditarTareaModal" onClick={()=>buscarTarea(tarea.id)}>Editar</a>
                                            <a href="#" className="btn btn-outline-danger ms-3" onClick={()=>eliminar(tarea.id)}>Eliminar</a>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>

            <div className="modal fade" id="AgregarTareaModal" tabIndex="-1" aria-labelledby="AgregarTareaModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content ">
                    <div className="modal-header">
                        <div>
                            <img src={tareaImg} alt="logo" style={{height: "2.5rem"}} />
                        </div>
                        <h1 className="modal-title fs-5 ms-2" id="AgregarTareaModalLabel">Agregar  <span className="text-primary">Tarea</span></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center mb-5">
                            <img src={task} alt="user-icon" style={{height: "7rem"}} />
                        </div>
                        <form>
                            <label htmlFor="message-text" className="col-form-label">Titulo:</label>
                            <div className="input-group mb-3">
                                <div  className="d-flex justify-content-center align-items-center input-group-text ">                        
                                    <img src={tareaImg} alt="inicio-icon" style={{height: "2rem"}} />
                                </div>
                                <input type="text" className="form-control fs-5 " id="recipient-name" placeholder="Titulo" value={tarea.titulo} onChange={(e)=>setTarea({...tarea,titulo: e.target.value})} required/>
                            </div>
                            <label htmlFor="message-text" className="col-form-label">Descripcion:</label>
                            <div className="input-group mb-3">
                                <div  className="d-flex justify-content-center align-items-center input-group-text">                        
                                    <img src={tareaImg} alt="inicio-icon" style={{height: "2rem"}} />
                                </div>
                                <input type="text" className="form-control fs-5" id="recipient-name" placeholder="Descripcion" value={tarea.descripcion} onChange={(e)=>setTarea({...tarea,descripcion: e.target.value})} required/>
                            </div>
                            <label htmlFor="message-text" className="col-form-label">Recursos:</label>
                            <div className="input-group mb-3">
                                <div  className="d-flex justify-content-center align-items-center input-group-text">                        
                                    <img src={tareaImg} alt="inicio-icon" style={{height: "2rem"}} />
                                </div>
                                <input type="text" className="form-control fs-5" id="recipient-name" placeholder="Recursos" value={tarea.recursos} onChange={(e)=>setTarea({...tarea,recursos: e.target.value})}  required/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={(e)=>agregar(e)}>Ingresar</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="EditarTareaModal" tabIndex="-1" aria-labelledby="EditarTareaModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content ">
                    <div className="modal-header bg-cyan-200">
                        <div>
                            <img src={tareaImg} alt="logo" style={{height: "2.5rem"}} />
                        </div>
                        <h1 className="modal-title fs-5 ms-2" id="EditarTareaModalLabel">Editar  <span className="text-primary">Tarea</span></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center mb-5">
                            <img src={task} alt="user-icon" style={{height: "7rem"}} />
                        </div>
                        <form>
                            <label htmlFor="message-text" className="col-form-label">Titulo:</label>
                            <div className="input-group mb-3">
                                <div  className="d-flex justify-content-center align-items-center input-group-text ">                        
                                    <img src={tareaImg} alt="inicio-icon" style={{height: "2rem"}} />
                                </div>
                                {
                                    <input type="text" className="form-control fs-5 " id="recipient-name" placeholder="" value={ediTarea.titulo} onChange={(e)=>SetEdiTarea({...ediTarea,titulo: e.target.value})} required/>
                                }
                            </div>
                            <label htmlFor="message-text" className="col-form-label">Descripcion:</label>
                            <div className="input-group mb-3">
                                <div  className="d-flex justify-content-center align-items-center input-group-text">                        
                                    <img src={tareaImg} alt="inicio-icon" style={{height: "2rem"}} />
                                </div>
                                {
                                    <input type="text" className="form-control fs-5" id="recipient-name" placeholder="Descripcion" value={ediTarea.descripcion} onChange={(e)=>SetEdiTarea({...ediTarea,descripcion: e.target.value})} required/>
                                }
                            </div>
                            <label htmlFor="message-text" className="col-form-label">Recursos:</label>
                            <div className="input-group mb-3">
                                <div  className="d-flex justify-content-center align-items-center input-group-text">                        
                                    <img src={tareaImg} alt="inicio-icon" style={{height: "2rem"}} />
                                </div>
                                {
                                    <input type="text" className="form-control fs-5" id="recipient-name" placeholder="Recursos" value={ediTarea.recursos} onChange={(e)=>SetEdiTarea({...ediTarea,recursos: e.target.value})}  required/>
                                }
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={()=>editar(ediTarea.id)}>Editar</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};