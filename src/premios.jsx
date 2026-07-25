import { useState } from 'react';
import './premios.css';
import matriculaHonor from './assets/matricula-honor.svg';
import premioAviles from './assets/premio-aviles.png';

function Premios() {
    const [premios] = useState([
        { nombre: 'Matrícula de Honor', razon: 'Bachillerato de Ciencia y Tecnología', fecha: '2022-2023', icono: matriculaHonor },
        { nombre: 'Premio Académico Excelente', razon: 'Ayuntamiento de Avilés', fecha: '2023-2024', icono: premioAviles }
    ]);

    return (
        <section className='premios'>
            <h2>Premios y reconocimientos</h2>
            <div className='premios-lista'>
                {premios.map((premios, index) => (
                    <article key={index} className='premios-card'>
                        <img src={premios.icono} alt="" />
                        <div className='premios-info'>
                            <h3>{premios.nombre}</h3>
                            <p>{premios.razon}</p>
                            <p className='fecha'>{premios.fecha}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Premios;