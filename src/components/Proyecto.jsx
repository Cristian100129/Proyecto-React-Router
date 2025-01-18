import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Trabajos } from './data/Trabajos'

export const Proyecto = () => {

    const params = useParams();

    useEffect(()=>{
        let proyecto = Trabajos.filter(trabajo => trabajo.id === params.id)

        console.log(proyecto)
    },[]);

  return (
    <div className='page'>
    <h1 className='heading'>Proyecto: {params.id}</h1>

    
    </div>
  )
}
