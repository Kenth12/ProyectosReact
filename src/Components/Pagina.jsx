import React from 'react';
import axios from 'axios';
import {useState} from 'react';



function Pagina() {
    const [datos, setDatos] = useState([]);
    //const [paginacion] = useState(1);
    
    const CargarInfo = async() =>{

        try{
            const Peticion = await axios.get(`https://reqres.in/api/users?page=1}`); 
            const Resultado = await Peticion.data; 
            //console.log(Resultado);
            setDatos(Resultado.data);
        }catch(e){
            console.log(e);
        }
    }

    if(datos.length === 1){
        <div>Cargando... Click nuevamente</div>
    }

    const Siguiente = async() =>{  
        try{
            const Peticion = await axios.get(`https://reqres.in/api/users?page=${2}`); 
            const Resultado = await Peticion.data; 
            //console.log(Resultado);
            setDatos(Resultado.data);
        }catch(e){
            console.log(e);
        }
    }

    const Anterior = async() =>{
        try{
            const Peticion = await axios.get(`https://reqres.in/api/users?page=${1}`); 
            const Resultado = await Peticion.data; 
            //console.log(Resultado);
            setDatos(Resultado.data);
        }catch(e){
            console.log(e);
        }
    }

    

  return (
    <>
        
        <h1> Datos Personas Api </h1>
        <div className="container" >
        {datos.map((Info)=>(
            <div className="box">
            <div className="image">
               <img src={Info.avatar} alt=""/>
              </div>
              <div className="name_job">{Info.first_name} {Info.last_name}</div>
              <div className="rating">
                <i className="fas fa-star">Correo: {Info.email}</i>
              </div>
              </div> 
        ))}
       </div>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <div class="d-grid gap-2 col-4 mx-auto">
        <button onClick={CargarInfo} class="btn btn-primary" type="button">Obtener datos</button>
        <button onClick={Siguiente}  class="btn btn-primary" type="button">Siguiente</button>
        <button onClick={Anterior}  class="btn btn-primary" type="button">Anterior</button>
        </div>
    </>
  )
}

export default Pagina;