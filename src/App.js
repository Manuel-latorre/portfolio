import Intro from './components/Intro/Intro'
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Proyectos from './components/Proyectos/Proyectos';
import Tecnologias from './components/Tecnologias/Tecnologias';
import Titulos from './components/Titulos/Titulos';
import Contacto from './components/Contacto/Contacto';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro />
      <AboutMe/>
      <Proyectos/>
      <Tecnologias/>
      <Titulos/>
      <Contacto/>
    </div>
  );
}


export default App;
