import './about.css';

function About() {
    
    return (
        <section id="sobre-mi" className="about">
            <div className="about-principal">
                <div className="photo-card">
                    <img src='src/assets/fotoPerfil.png' alt="Andy García Sánchez" />
                </div>
                <div className="info">
                    <h2>Sobre mí</h2>
                    <div className="info-block">
                        <img src='src/assets/ubicacion.png' alt="Ubicación" />
                        <p>Asturias, España</p>
                    </div>
                    <div className="info-block">
                        <img src='src/assets/universidad.png' alt="Universidad" />
                        <p>Universidad Internacional de la Rioja (UNIR)</p>
                    </div>
                    <div className="info-block">
                        <img src='src/assets/informatica.png' alt="Ingeniería Informática" />
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