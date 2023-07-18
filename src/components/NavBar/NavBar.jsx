import React, { useState } from 'react'
import './NavBar.css'
import logo from './assets/logo.svg'
import openMenu from './assets/bars.png'
import closeMenu from './assets/x.png'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>   
        <div className={`nav_toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
          {
            !isOpen ? <img className='togglw' src={openMenu} alt="" /> 
            : <img className='togglw' src={closeMenu} alt="" /> 
          }
        </div>
        <div className='nav_logo'>
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div className={`nav_items ${isOpen && 'open'}`}>
            <a href='#inicio' >Incio</a>
            <a href='#sobreMi'>Sobre mi</a>
            <a href='#proyectos'>Proyectos</a>
            <a href='#tecnologias'>Tecnologias</a>
            <a href='#titulos'>Titulos</a>
            <a href='#contacto'>Contacto</a>
        </div>
    </div>
  )
}

export default NavBar