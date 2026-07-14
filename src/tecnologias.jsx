import {useState} from 'react';
import './tecnologias.css'

function Tecnologias() {
  const [tecnologias] = useState([
    { nombre: 'React', icono: 'src/assets/react.svg' },
    { nombre: 'JavaScript', icono: 'src/assets/javascript.svg' },
    { nombre: 'HTML5', icono: 'src/assets/html.svg' },
    { nombre: 'CSS3', icono: 'src/assets/css.svg' },
    { nombre: 'Node.js', icono: 'src/assets/nodejs.svg' },
    { nombre: 'npm', icono: 'src/assets/npm.svg' },
    { nombre: 'Git', icono: 'src/assets/git.svg' },
    { nombre: 'GitHub', icono: 'src/assets/github.svg' },
    { nombre: 'Vite', icono: 'src/assets/vite.svg' },
    { nombre: 'Angular', icono: 'src/assets/angular.svg' },
    { nombre: 'PostgreSQL', icono: 'src/assets/postgresql.svg' },
    { nombre: 'Docker', icono: 'src/assets/docker.svg' },
    { nombre: 'Pnpm', icono: 'src/assets/pnpm.svg' },
    { nombre: 'Vercel', icono: 'src/assets/vercel.svg' }
]);


  const tecnologiasDuplicadas = [...tecnologias, ...tecnologias];

  return (
    <section id="tecnologias" className="tecnologias">
      <h2>Tecnologías</h2>
      <div className="tecnologias-viewport">
        <div className="tecnologias-track">
          {tecnologiasDuplicadas.map((tecnologia, index) => (
            <div key={`${tecnologia.nombre}-${index}`} className="tecnologia-card">
              <img src={tecnologia.icono} alt={tecnologia.nombre} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tecnologias;