import { useState } from 'react';
import './periodico.css'

function Periodico() {
    
    const [periodico] = useState([
            { logo: 'src/assets/lne-logo.png', nombre: 'La Nueva España', fecha: '31 Ago 2023', preview: 'src/assets/periodico-lne.png', titulo: 'Estudiantes avilesinos de 10, en busca de su futuro laboral', descripcion: '"Avilés es una ciudad para trabajar y vivir", reivindica la Alcaldesa para retener al alumnado que finaliza Bachiller y FP', enlace: 'https://www.lne.es/aviles/2023/08/31/estudiantes-avilesinos-10-busca-futuro-91519892.html' },
            { logo: 'src/assets/elcomercio-logo.jpg', nombre: 'La Voz de Avilés', fecha: '31 Ago 2023', preview: 'src/assets/periodico-elcomercio.png', titulo: '«Vuestro éxito es el de toda la ciudad», dice la alcaldesa a los mejores expedientes', descripcion: 'Los 56 estudiantes con mejores notas de Bachiller y FP en centros de la ciudad son homenajeados en la Casa de Cultura', enlace: 'https://www.elcomercio.es/aviles/exito-ciudad-dice-alcaldesa-mejores-expedientes-20230831002200-nt.html?ref=https%3A%2F%2Fwww.elcomercio.es%2Faviles%2Fexito-ciudad-dice-alcaldesa-mejores-expedientes-20230831002200-nt.html' },
            { logo: 'src/assets/aviles-logo.jpg', nombre: 'Avilés - Educación', fecha: '30 Ago 2023', preview: 'src/assets/periodico-educacion.png', titulo: 'Reconocimiento a 56 estudiantes de 2º de Bachillerato y FP por su rendimiento', descripcion: 'La alcaldesa de Avilés, Mariví Monteserín, y el concejal de Educación, Juan Carlos Guerrero, han participado este miércoles en el acto de reconocimiento al alumnado de 2º curso de Bachillerato y Formación Profesional que, durante el curso escolar 2022/2023, demostraron un rendimiento académico destacado', enlace: 'https://aviles.es/w/reconocimiento-a-56-estudiantes-de-2%C2%BA-de-bachillerato-y-fp-por-su-rendimiento-acad%C3%A9mico-durante-el-pasado-curso' }
        ]);

    function maxLength(text, maxChars = 140) {
        if (!text) return '';
        if (text.length <= maxChars) return text;
        return `${text.slice(0, maxChars).trimEnd()}...`;
    }

    return(
        <section className='periodico'>
            <h2>Periódico</h2>
            <div className='periodico-lista'>
                {periodico.map((periodico, index) => (
                    <div key={index} className='periodico-card'>
                        <div className='card-header'>
                            <div className='logo-nombre'>
                                <div className='logo-box'>
                                    <img src={periodico.logo} />
                                </div>
                                <p className='nombrePeriodico'>{periodico.nombre}</p>
                            </div>
                            <p className='fecha'>{periodico.fecha}</p>
                        </div>
                        <div className='preview'>
                            <img src={periodico.preview}></img>
                        </div>
                        <div className='contenido'>
                            <h4>{periodico.titulo}</h4>
                            <p>{maxLength(periodico.descripcion)}</p>
                        </div>
                        <a href={periodico.enlace} target='_blank' rel='noopener noreferrer'className='btn-ver'>
                            Ver
                            <img src='src/assets/link.svg'></img>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Periodico;