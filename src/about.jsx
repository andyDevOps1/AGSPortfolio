import './about.css';
import fotoPerfil from './assets/fotoPerfil.png';
import ubicacion from './assets/ubicacion.png';
import universidad from './assets/universidad.png';
import informatica from './assets/informatica.png';

function About() {
    return (
        <section id="sobre-mi" className="about">
            <div className="about-principal">
                <div className="photo-card">
                    <img src={fotoPerfil} alt="Andy García Sánchez" />
                </div>
                <div className="info">
                    <h2>Sobre mí</h2>
                    <div className="info-block">
                        <img src={ubicacion} alt="Ubicación" />
                        <p>Asturias, España</p>
                    </div>
                    <div className="info-block">
                        <img src={universidad} alt="Universidad" />
                        <p>Universidad Internacional de la Rioja (UNIR)</p>
                    </div>
                    <div className="info-block">
                        <img src={informatica} alt="Ingeniería Informática" />
                        <p>Grado en Ingeniería Informática</p>
                    </div>
                </div>
            </div>
            <div className="about-divisor"></div>
            <div className="descripcion">
                <ul className="especialidades">
                    <li>Desarrollo de bases de datos.</li>
                    <li>Sistemas multiagente.</li>
                    <li>Experiencia en aplicaciones web y nativas.</li>
                    <li>Rendimiento, seguridad, escalabilidad y mantenimiento.</li>
                    <li>React, Node, JavaScript, HTML5 y CSS3.</li>
                    <li>Aprendizaje continuo de nuevas tecnologías.</li>
                </ul>
            </div>
        </section>
    );
}

export default About;