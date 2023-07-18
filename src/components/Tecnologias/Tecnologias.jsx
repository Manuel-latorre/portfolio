import React from 'react'
import './Tecnologias.css'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import react from './assets/react.png'
import nodejs from './assets/nodejs.png'
import postrgesql from './assets/postgresql.png'
import redux from './assets/redux.png'
import typescript from './assets/typescript.png'
import express from './assets/express.png'

const Tecnologias = () => {
  return (
    <div id='tecnologias' className='containerTecnologias'>
        <div className='sectionTech'>
            <div className='sectionTitle'>
                <h2 className='titleTecnologias'>Tecnologías</h2>
            </div>
            <div className='tecnologias'>
              <div>
                <img className='imgTecnologia' src={html} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>HTML</p>
              </div>
              <div>
                <img className='imgTecnologia' src={css} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>CSS</p>
              </div>
              <div>
                <img className='imgTecnologia' src={javascript} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Javascript</p>
              </div>
              <div>
                <img className='imgTecnologia' src={typescript} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Typescript</p>
              </div>
              <div>
                <img className='imgTecnologia' src={react} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>React/React Native</p>
              </div>
              <div>
                <img className='imgTecnologia' src={nodejs} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Node js</p>
              </div>
              <div>
                <img className='imgTecnologia' src={redux} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Redux</p>
              </div>
              <div>
                <img className='imgTecnologia' src={express} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>Express</p>
              </div>
              <div>
                <img className='imgTecnologia' src={postrgesql} alt="html" />
                <p style={{textAlign: 'center', fontWeight: 'bold'}}>PostgreSQL</p>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Tecnologias