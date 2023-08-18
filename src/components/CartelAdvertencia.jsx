import React, { useContext } from 'react'
import "../styles/CartelAdvertencia.css"
import { BotonNav } from "./BotonNav"
import { CartelAdvertenciaContext } from '../context/CartelAdvertenciaContext'

export const CartelAdvertencia = () => {

  const { mostrarCartelAdvertencia, handleMostrarCartelAdvertencia } = useContext( CartelAdvertenciaContext )


  return (
    <>
      {
        (mostrarCartelAdvertencia) 
        ? 
          (      
            <div className='container-cartel-advertencias'>
                <div className='cartel-advertencia'>
                  <h2 className='titulo-cartel-advertencia'>Este es un error</h2>
                  <BotonNav 
                    className= "boton-cartel-advertencia"
                    handleOnClick= { handleMostrarCartelAdvertencia }
                  >Aceptar</BotonNav>
                </div>
            </div>
          ) 
        : (
            <div></div>
          )
      }
    </>
  )
}
