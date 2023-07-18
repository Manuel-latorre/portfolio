import React, { useRef } from 'react'
import './Contacto.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ch5e6f9', 'template_fk022wf', form.current, '_CdUnxT0WVgK2pTat')
      .then((result) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha enviado el mensaje correctamente',
            showConfirmButton: false,
            timer: 1500
          })
      }, (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Se ha enviado el mensaje correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      });
  };

  return (
    <div id='contacto' className='containerForm'>
            <div className='divContactate'>
                <h2 className='titleContacto'>Contactame!</h2>
            </div>
        <div className='form'>
            <form ref={form} onSubmit={sendEmail} className='field'>
                <label>Nombre</label>
                <input placeholder='Nombre' type="text" name="user_name" />

                <label>Email</label>
                <input placeholder='Email' type="email" name="user_email" />
                
                <label>Mensaje</label>
                <textarea className='textAerea' placeholder='Escriba su mensaje' name="message" />
                <input className='enviar' type="submit" value="Enviar" />
            </form>
        </div>
    </div>
  )
  
}

export default Contacto