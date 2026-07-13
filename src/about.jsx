import { useState } from 'react';
import './about.css';

function About() {
    
    return (
        <div className="about">
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
            <div className="divisor"></div>
            <div className="descripcion">
                <p>
                    Experto en desarrollo de software con experiencia en React, JavaScript, HTML5, CSS3 y Node.js. 
                    Apasionado por la creación de aplicaciones web interactivas y funcionales, con un enfoque en la experiencia del usuario y el rendimiento. 
                    Siempre en busca de aprender nuevas tecnologías y mejorar mis habilidades para ofrecer soluciones innovadoras y eficientes.
                </p>
            </div>
            
        </div>    
    );
}

export default About;