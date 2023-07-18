import React, {useRef} from 'react'
import perfil from './assets/perfilAboutMe.svg'
import descargaCv from './assets/descargaCv.png'

import './AboutMe.css'

const PDF_FILE_URL =  'http://localhost:3000/CV-Manuel-Latorre.pdf'

const AboutMe = () => {

  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  
  return (
  <div id='sobreMi' className='container'>

   
    <div className='containerAboutMe'>
        <div className='aboutme'>
        <div className='containerCV'>
          <h2 className='sobreMi'>Sobre mi</h2>
          <button onClick={() => downloadFileAtURL(PDF_FILE_URL)} className='btnCV'><p>CV</p> <img className='gifDescargaCv' src={descargaCv} alt="" /></button>
        </div>

          
          <img className='perfil' src={perfil} alt="" />
        </div>
        <div className='cards'>

          <div className='box'>
            <span></span>
              <div className='card'>         
                <h3>Quien Soy?</h3>
                <p>Soy Manu, tengo 20 años y vivo en Mar Del Plata, Buenos Aires, Argentina. En 2021 comencé mis estudios universitarios, estudie un año de Diseño y Animacion Digital, en donde me di cuenta que verdaderamente no me gustaba mucho y decidí en 2022 dar mis primeros pasos en el mundo de la programación, el cual es un mundo maravilloso y me fascina. Actualmente, culmine mis estudios en SoyHenry y me gradúe como Desarrollador Fullstack </p>
              </div>
          </div>

          <div className='box'>
            <span></span>
              <div className='card'>          
                <h3>Cuáles son mis metas?</h3>
                <p>Una de mis metas principales adentrarme en el mundo laboral para poder desarrollarme efectivamente aplicando mis habilidades, contribuyendo y generando soluciones innovadoras y simples de utilizar. Otra de mis metas es constantemente seguir aprendiendo las últimas tecnologías más utilizadas en el mercado laboral. </p>
              </div>
          </div>

          <div className='box'>
            <span></span>
              <div className='card'>
                <h3>Conoceme un poquito más!</h3>
                <p>A lo largo de mi recorrido como programador me he dado cuenta de que me gusta más dedicarme al Frontend, en un futuro me gustaría volverme un experto del CSS!. En mis tiempos libres me gusta jugar a la Play con amigos, ver futbol o también alguna serie/película </p>
              </div>
          </div>

        </div>
            
    </div>
  </div>
  )
}

export default AboutMe