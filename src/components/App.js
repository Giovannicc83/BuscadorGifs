import Buscador from './Buscador';
import Gifs from './Gifs';
import { useState } from "react";
import '../styles/index.css';

const App = () =>{
    
    const [busqueda, setBusqueda] = useState([]);
    
    
    return (
        <>
          <h1>Buscador de Gifs</h1>
          
          
          <hr></hr> 
        <Buscador busqueda={busqueda} setBusqueda={setBusqueda}/>

          
            {
              busqueda.map((item) =>{
                return <Gifs key={item} item={item}/>
                
              })
            }
          
          
        </>
    )
}

export default App
// Crear un componente que se llame buscador
// Contenido del componente: un h1 que diga "Gif", imput de tipo texto y hr
// Llamar componente en App.js