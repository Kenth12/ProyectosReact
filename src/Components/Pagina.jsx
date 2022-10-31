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
               <img src={Info.avatar}/>
              </div>
              <div className="name_job">{Info.first_name} {Info.last_name}</div>
              <div className="rating">
                <i className="fas fa-star">Correo: {Info.email}</i>
              </div>
              </div> 
        ))}
       </div>
       <button onClick={CargarInfo} >Obtener datos</button>
       <button onClick={Siguiente}  >Siguiente</button>
        <button onClick={Anterior}  >Anterior</button> 
    </>
  )
}

export default Pagina;