import React from 'react'
import tiendCactus from './assets/tiendaCactus.png'
import countries from './assets/countries.png'
import wiseWallet from './assets/wise.png'
import './Proyectos.css'



const Proyectos = () => {
  return (
    <div id='proyectos'>

      <div className='containerProyectos'>
        <h2 className='misProyectos'>Mis Proyectos</h2>

        <div className='cardsProyectos'>
            <div className='cardProyecto'>
            <img className='imgCard' src={tiendCactus} alt="" />
                <h4 className='titleCard'>Tienda Cactus</h4>
                <p className='textCard'>Tienda Cactus es un E-commerce ficticio con productos que he agregado por mi cuenta con el fin de simular el flujo de un e-commerce real. Contiene filtros por marca, categoria y color. Tambien cuenta con el detalle de cada producto al hacer click en ver producto. Proximamente me gustaria agregarle una pasarela de pagos para que sea mas real y dinamico.</p>
                <p>Tecnologias: HTML, CSS, Javascript.</p>
                <div className='divBtn'>
                  <a className='btnLink' href="https://manuel-latorre.github.io/Tienda-Cactus/" target="_blank">Visita la pagina aqui</a>
                </div>
               
            </div>

            <div className='cardProyecto'>
            <img className='imgCard' src={countries} alt="" />
                <h4 className='titleCard'>MyCountry</h4>
                <p className='textCard'>MyCountry consiste en el desarrollo de una SPA (Single Page Application), en la cual utilizo datos de la API (restcountries) para luego almacenarlos en mi propia base de datos (PostgreSQL). Con el fin de permitirle al usuario tener disponible la información de todos los países y así poder llevar un registro de las actividades realizadas en cada uno</p>
                <p> Tecnologias: JavaScript, React, Redux, CSS, NodeJs, Express, Sequelize, PostgreSQL</p>
                <div className='divBtn'>
                  <a className='btnLink' href="https://github.com/Manuel-latorre/PI-Countries.git" target="_blank">Visita el repositorio aqui</a>
                </div>
                
            </div>

            <div className='cardProyecto'>
            <img className='imgCard' src={wiseWallet} alt="" />
                <h4 className='titleCard'>Wise Wallet</h4>
                <p className='textCard'>Consiste en el desarrollo de un App para controlar tus gastos e ingresos, en la cual puedes crear las cuentas que desees y en ellas crear los ingresos y gastos que tendrán impacto en un gráfico de torta y ahí podrás ver el balance de todos tus movimientos representados gráficamente. Cuenta con una versión Premium en la que puedes acceder a las funciones de crear gastos compartidos y también a la sección de Metas.</p>
                <p>Tecnologias: Typescript, React Native, Redux Toolkit, CSS, NodeJs, Express, Sequelize, PostgreSQL</p>
                <div className='divBtnWise'>
                  <a className='btnLinkWise' href="https://github.com/Ezeko95/Wallet-Wise-client-app.git" target="_blank">Visita el repositorio aqui</a>
                  <a className='btnLinkWise' href="https://vimeo.com/843702475" target="_blank">Video de la App aqui</a>
                </div>
                
            </div>
        </div>

    </div>
    </div>
  )
}

export default Proyectos