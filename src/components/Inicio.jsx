import React from 'react'
import {Link} from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
        <h1>
          Hola, soy Cristian Grosso y soy <strong>Ingeniero de software</strong> en Bogota D.C
          y ofrezco mis servicios de <strong>programacion y desarrollo</strong> en
          todo tipo de proyectos web 
        </h1>  

        <h2>
          Te ayudo a crear tu sitio o aplicacion web, tener mas 
          visibilidad y relevancia en Internet. <Link to="/Contacto">Contacta conmigo</Link>
        </h2>

        <section className='last-works'>
            <h2 className='heading'>Algunos de mis proyectos</h2>
            <p>Estos son algunos de mis trabajos de desarrollo web</p>

            <div className='works'>

            </div>
        </section>
    
    </div>
  )
}
