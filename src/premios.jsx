import { useState } from 'react';
import './premios.css'

function Premios() {
    const [premios] = useState([
        { nombre: 'Matrícula de Honor', razon: 'Bachillerato de Ciencia y Tecnología', fecha: '2022-2023', icono: 'src/assets/matricula-honor.svg' },
        { nombre: 'Premio Académico Excelente', razon: 'Ayuntamiento de Avilés', fecha: '2023-2024', icono: 'src/assets/premio-aviles.png' }
    ]);

    return (
        <section className='premios'>
            <h2>Premios y reconocimientos</h2>
            <div className='premios-lista'>
                {premios.map((premios, index) => (
                    <div key={index} className='premios-card'>
                        <img src={premios.icono} alt={premios.tipo} />
                        <div className='premios-info'>
                            <h3>{premios.nombre}</h3>
                            <p>{premios.razon}</p>
                            <p className='fecha'>{premios.fecha}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Premios;