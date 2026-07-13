import { useState } from 'react';
import './contacto.css';

function Contacto() {
    const [mensaje, setMensaje] = useState('');
    const maxChar = 500;

    const handleMensajeChange = (event) => {
        const valor = event.target.value;
        setMensaje(valor.slice(0, maxChar));
    };

    return (
        <section className="contacto">
            <div className='seccion-contacto'>
                <h2>Contacto</h2>
                <form>
                    <div className="inputs">
                        <input type="text" placeholder="Nombre" required />
                        <input type="email" placeholder="Email" required />
                    </div>
                    <input type="text" placeholder="Asunto" required className='asunto'/>
                    <div className='textarea-wrapper'>
                        <textarea
                            placeholder="Mensaje"
                            value={mensaje}
                            onChange={handleMensajeChange}
                        />
                        <p className={mensaje.length >= maxChar ? "contador-rojo" : "contador-gris"}>
                            {mensaje.length}/{maxChar}
                        </p>
                    </div>
                    <button type="submit">Enviar mensaje</button>
                </form>
                <div className='divisor'></div>
            </div>
            <div className='seccion-rrss'>
                <h2>Redes sociales</h2>
                <p>Contacta conmigo en GitHub, Gmail, Instagram y Discord.</p>
                    <div className='redes'>
                        <div className='rrss'>
                            <a href='https://github.com/andyDevOps1' target='_blank' rel='noopener noreferrer' className='img-card'>
                                <img src='src/assets/github.svg' alt='GitHub' />
                            </a>
                            <div className='texto-img'>   
                                <h3>GitHub</h3>
                                <p>/andyDevOps1</p>
                            </div>
                        </div>   
                        <div className='rrss'>
                            <div className='img-card'> 
                                <img src='src/assets/email-rrss.png'></img>
                            </div>    
                            <div className='texto-img'>
                                <h3>Gmail</h3>
                                <p>Próximamente</p>
                            </div>
                        </div>    
                        <div className='rrss'>
                            <a href='https://www.instagram.com/andy.grciia' target='_blank' rel='noopener noreferrer' className='img-card'>
                                <img src='src/assets/email-rrss.png' alt='Gmail' />
                            </a>
                            <div className='texto-img'>    
                                <h3>Instagram</h3>
                                <p>@andy.grciia</p>
                            </div>
                        </div>     
                        <div className='rrss'>
                            <div className='img-card'>
                                <img src='src/assets/discord-rrss.svg'></img>
                            </div>
                            <div className='texto-img'>
                                <h3>Discord</h3>
                                <p>kiminatsy7</p>
                            </div>    
                        </div>
                    </div>
            </div>

        </section>
    );
}

export default Contacto;
