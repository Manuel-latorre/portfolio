import React, {useRef} from 'react'
import './NavBar.css'
import logo from './assets/logo.svg'

const NavBar = () => {

  return (
    <div className='navbar'>
        <div>
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div className='containerBtnNavbar'>
            <a href='#inicio' className='btnNavbar'>Incio</a>
            <a href='#sobreMi' className='btnNavbar'>Sobre mi</a>
            <a href='#proyectos' className='btnNavbar'>Proyectos</a>
            <a href='#tecnologias' className='btnNavbar'>Tecnologias</a>
            <a href='#titulos' className='btnNavbar'>Titulos</a>
            <a href='#contacto' className='btnNavbar'>Contacto</a>
        </div>
    </div>
  )
}

export default NavBar