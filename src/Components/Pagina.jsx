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
            <div>
           <h5>{Info.email}</h5>
           <h5>{Info.first_name} {Info.last_name}</h5>
           <img src={Info.avatar} />
           </div>
        ))}
       </div>
       <button onClick={CargarInfo} >Obtener datos</button>
        
    </>
  )
}

export default Pagina;