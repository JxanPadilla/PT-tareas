import DataTable from "react-data-table-component"
import axios from 'axios';
import React, {useEffect, useState} from 'react';

export const Recursos = () => {

    const customStyles = {
        headCells: {
            style: {
                fontSize: '20px', 
            },
        },
        cells: {
            style: {
                fontSize: '19px', 
            },
        },
    };

    const columns = [
        {
            name: "#",
            selector: (row) => row.id,
            sortable: true,
            maxWidth: '45%',
        },
        {
            name: "Nombre",
            selector: (row) => row.nombre,
            sortable: true,
            maxWidth: '40%',

        },
        {
            name: "Fecha",
            selector: (row) => ( row.fecha),
            maxWidth: '15%',
        },
    ]

    // const data = [
    //     {
    //         id: "1",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "2",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "3",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "4",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "5",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "6",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "7",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "8",
    //         nombre: "Prueba",
    //     },
    //     {
    //         id: "9",
    //         nombre: "Prueba",
    //     }
    // ]

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://consultas.cuc.edu.co/api/v1.0/recursos', {
              headers: {
                Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InBydWViYTIwMjJAY3VjLmVkdS5jbyIsImV4cCI6MTY0OTQ1MzA1NCwiY29ycmVvIjoicHJ1ZWJhMjAyMkBjdWMuZWR1LmNvIn0.MAoFJE2SBgHvp9BS9fyBmb2gZzD0BHGPiyKoAo_uYAQ'
              }
            });
            setData(response.data); // Asume que los datos están en response.data
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data: ', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      if (loading) {
        return <div>Loading...</div>;
      }    

    return(
        <>
            <div className='contTitulo'>
                    <h1 className="text-8xl">Recursos</h1>
            </div>

            <div className="flex justify-center mt-6">
                <div className="bg-white border p-0.5 rounded-xl w-11/12 ">
                    <DataTable className="text-9xl"
                    columns={columns}
                    data={data}
                    pagination
                    paginationPerPage={7}
                    customStyles={customStyles}
                    />
                </div>
            </div>

        </>
    );
};