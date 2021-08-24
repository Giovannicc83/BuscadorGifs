
import {useState} from 'react';
import PropTypes from 'prop-types';


const Buscador = ({busqueda, setBusqueda}) => {
  
  
  
   const [valorInput, setValorInput] = useState('');

   const handleUpdate = (evento) => {
      setValorInput(evento.target.value);
   }
    

   const handleSubmit = (evento2) =>{
      evento2.preventDefault();
      if(valorInput.trim().length >= 1){
        setBusqueda([valorInput, ...busqueda]);
        //setBusqueda((itemsBusqueda) => [...itemsBusqueda, valirInput]);
        setValorInput('');
      }
   }

    return (
      <form onSubmit={handleSubmit}>
      
        <input type='text' value={valorInput} onChange={handleUpdate} placeholder='Escriba gif por buscar'></input>
        <button type='submit'>Buscar</button>
      </form>
    )
}

export default Buscador


Buscador.propTypes = {
  busqueda:  PropTypes.array, 
  setBusqueda: PropTypes.func
}

//buscar proptypes a todo lo que hagamos

// 3trU6PshGeAc5nyPZu4y1DnDC3cVt2EY

// api.giphy.com/v1/gifs/search