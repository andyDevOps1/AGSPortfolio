import { useState } from 'react';
import './certificaciones.css'

function Certificaciones() {
    const [certificaciones] = useState([
        { nombre: 'Microsoft Azure', tipo: 'AZ-900 Fundamentals', icono: 'src/assets/az-900.png' }
    ]);

    return (
        <section className='certificaciones'>
            <h2>Certificaciones</h2>
            <div className='certificaciones-lista'>
                {certificaciones.map((certificacion, index) => (
                    <div key={index} className='certificaciones-card'>
                        <img src={certificacion.icono} alt={certificacion.tipo} />
                        <div className='certificaciones-info'>
                            <h3>{certificacion.nombre}</h3>
                            <p>{certificacion.tipo}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certificaciones;