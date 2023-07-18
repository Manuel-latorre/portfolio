import React from 'react'
import './Titulos.css'
import henry from './assets/tituloHenry.png'
import dbCoder from './assets/dbCoder.png'
import jsCoder from './assets/jsCoder.png'

const Titulos = () => {
  return (
    <div id='titulos' className='containerTitulos'>
        
            <div className='sectionTitleTitulos'>
                <h2 className='titleTitulos'>Titulos</h2>
            </div>
            <div className='titulos'>
                <img className='imgTitulo' src={henry} alt="" />
                <img className='imgTitulo' src={dbCoder} alt="" />
                <img className='imgTitulo' src={jsCoder} alt="" />
            </div>
        
    </div>
  )
}

export default Titulos