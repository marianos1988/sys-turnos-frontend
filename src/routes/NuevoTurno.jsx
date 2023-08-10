import React from 'react'
import { Checkbox } from '@mui/material'
import "../styles/NuevoTurno.css"
import { useForm } from '../hooks/useForm'
import { useContext } from 'react'
import { NuevoTurnoContext } from '../context/NuevoTurnoContext'

export const NuevoTurno = () => {

  const { formState, onInputChange } = useForm();

  const { handleSetListaTurnos } = useContext( NuevoTurnoContext );

 
  const guardarTurno = (e) => {
    e.preventDefault();
    handleSetListaTurnos(formState);
  }

  return (
    <div className='container-nuevo-turno'>
      <div className='group-tittle-nuevoTurno'>
        <h2>Nuevo Turno:</h2>
      </div>
      <form>
        <div className='group-input'>
          <h3>Nombre Cliente: </h3>
          <input 
            type="text"
            name='nombreCliente'
            onChange={onInputChange}
          />
        </div>
        <div className='group-input'>
          <h3>Telefono: </h3>
          <input 
            type="number"
            name='telefono'
            onChange={onInputChange}
          />
        </div>
        <div className='group-input'>
          <h3>Seleccionar Fecha</h3>
          <input 
            type="date"
            name="fecha"
            onChange={onInputChange}
          />
        </div>
        <div className='group-input'>
          <h3>Seleccionar Hora:</h3>
          <input 
            type="time"
            name='hora'
            onChange={onInputChange}
          />
        </div>
        <div className='group-input'>
          <h3>Tipo de Trabajo</h3>
          <div className='group-checkbox'>
            <h4>Corte: </h4>
            <Checkbox
             color="success"
             className='checkbox-tipo-trabajo'
             name='corte'
             value="Corte"

             onChange={onInputChange}
            />
            <h4>Peinado: </h4>
            <Checkbox 
              color="success"
              className='checkbox-tipo-trabajo'
              name='peinado'
              value="Peinado"

              onChange={onInputChange}
            />
            <h4>Alisado: </h4>
            <Checkbox 
              color="success" 
              className='checkbox-tipo-trabajo'
              name='alisado'
              value="Alisado"

              onChange={onInputChange}
            />
            <h4>Tintura: </h4>
            <Checkbox 
              color="success" 
              className='checkbox-tipo-trabajo'
              name='tintura'
              value="Alisado"
              onChange={onInputChange}    
            />
          </div>
        </div>
        <div className='group-input'>
          <h3>Observacion</h3>
          <input 
            type="text"
            name='observacion'
            onChange={onInputChange}
          />
        </div>
        <div className='group-button-nuevo-turno'>
        <button 
          className="custom-btn-cargar btn-14"
          onClick={guardarTurno}
        >Crear Turno</button>
        </div>
      </form>
    </div>
  )
}