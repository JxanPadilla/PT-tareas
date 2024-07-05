import '../../../index.css'
import { useEffect } from 'react';

export const Inicio = () => {
    useEffect(() => {
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }, []);
    return(
        <>
            <div className='contTitulo'>
                    <h1 className="text-8xl">Task List</h1>
                </div>
                <div className='contentBody'>
                    <div className='contentBodyImg'></div>
                    <div className="lema">
                        <h5>El mejor lugar para administrar tus actividades</h5>
                    </div>
                </div>

        </>
    );
};