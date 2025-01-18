import React from 'react'
import {Trabajos} from './data/Trabajos'
import {Link} from 'react-router-dom'


export const Portafolio = () => {
  return (
    <div className='page'>
         <h1 className='heading'>Portafolio</h1>
         <section className='works'>
         {
          Trabajos.map(trabajos => (
          <article key={trabajos.id} className='work-item'> 
          <div className='mask'>
            <img src={"./images/"+trabajos.id+".png"}/>
          </div>
          <span>{trabajos.categorias}</span>
          <h2><Link to="/Proyecto:id">{trabajos.nombre}</Link></h2>
          <h3>{trabajos.tecnologias}</h3>
          </article>
        ))
         }
         </section>
        
    </div>
  )
}
