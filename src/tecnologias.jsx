import { useState } from 'react';
import './tecnologias.css';
import reactIcon from './assets/react.svg';
import javascriptIcon from './assets/javascript.svg';
import htmlIcon from './assets/html.svg';
import cssIcon from './assets/css.svg';
import nodejsIcon from './assets/nodejs.svg';
import npmIcon from './assets/npm.svg';
import gitIcon from './assets/git.svg';
import githubIcon from './assets/github.svg';
import viteIcon from './assets/vite.svg';
import angularIcon from './assets/angular.svg';
import postgresqlIcon from './assets/postgresql.svg';
import dockerIcon from './assets/docker.svg';
import pnpmIcon from './assets/pnpm.svg';
import vercelIcon from './assets/vercel.svg';

function Tecnologias() {
  const [tecnologias] = useState([
    { nombre: 'React', icono: reactIcon },
    { nombre: 'JavaScript', icono: javascriptIcon },
    { nombre: 'HTML5', icono: htmlIcon },
    { nombre: 'CSS3', icono: cssIcon },
    { nombre: 'Node.js', icono: nodejsIcon },
    { nombre: 'npm', icono: npmIcon },
    { nombre: 'Git', icono: gitIcon },
    { nombre: 'GitHub', icono: githubIcon },
    { nombre: 'Vite', icono: viteIcon },
    { nombre: 'Angular', icono: angularIcon },
    { nombre: 'PostgreSQL', icono: postgresqlIcon },
    { nombre: 'Docker', icono: dockerIcon },
    { nombre: 'Pnpm', icono: pnpmIcon },
    { nombre: 'Vercel', icono: vercelIcon }
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