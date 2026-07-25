import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contacto.css';
import greencheck from './assets/greencheck.svg';
import githubIcon from './assets/github.svg';
import emailRrss from './assets/email-rrss.png';
import instagramRrss from './assets/instagram-rrss.svg';
import discordRrss from './assets/discord-rrss.svg';

function Contacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mostrarMensajeExito, setMostrarMensajeExito] = useState(false);
    const maxChar = 500;
    const [state, handleSubmit] = useForm("mzdnbwvp");
    const mensajeDeEnvio = "Mensaje enviado correctamente";

    useEffect(() => {
        if (state.succeeded) {
            setNombre('');
            setEmail('');
            setAsunto('');
            setMensaje('');
            setMostrarMensajeExito(true);

            const timeoutId = window.setTimeout(() => {
                setMostrarMensajeExito(false);
            }, 4000);

            return () => window.clearTimeout(timeoutId);
        }
    }, [state.succeeded]);

    const handleMensajeChange = (event) => {
        const valor = event.target.value;
        setMensaje(valor.slice(0, maxChar));
    };

    return (
        <section id="contacto" className="contacto">
            <div className='seccion-contacto'>
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input type="text" name="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                        <ValidationError prefix="Nombre" field="nombre" errors={state.errors}/>

                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <input type="text" name="asunto" placeholder="Asunto" value={asunto} onChange={(e) => setAsunto(e.target.value)} required className='asunto'/>
                    <ValidationError prefix="Asunto" field="asunto" errors={state.errors}/>
                    <div className='textarea-wrapper'>
                        <textarea
                            name="mensaje"
                            placeholder="Mensaje"
                            value={mensaje}
                            onChange={handleMensajeChange}
                        />
                        <ValidationError prefix="Mensaje" field="email" errors={state.errors} />
                        <p className={mensaje.length >= maxChar ? "contador-rojo" : "contador-gris"}>
                            {mensaje.length}/{maxChar}
                        </p>
                    </div>
                    <div className='boton-mensaje'>
                        <button type="submit" disabled={state.submitting}>{state.submitting ? "Enviando..." : "Enviar mensaje"}</button>
                        {state.succeeded && (
                            <div className={`estado-mensaje ${mostrarMensajeExito ? 'visible' : 'hidden'}`}>
                                <p className='estadoMensaje'>{mensajeDeEnvio}</p>
                                <img src={greencheck} className='greencheck' alt='check' />
                            </div>
                        )}
                    </div>
                </form>
                <div className='divisor'></div>
            </div>
            <div className='seccion-rrss'>
                <h2>Redes sociales</h2>
                <p>Contacta conmigo en GitHub, Gmail, Instagram y Discord.</p>
                <div className='redes'>
                    <div className='rrss'>
                        <a href='https://github.com/andyDevOps1' target='_blank' rel='noopener noreferrer' className='img-card'>
                            <img src={githubIcon} alt='GitHub' />
                        </a>
                        <div className='texto-img'>
                            <h3>GitHub</h3>
                            <p>/andyDevOps1</p>
                        </div>
                    </div>
                    <div className='rrss'>
                        <div className='img-card'>
                            <img src={emailRrss}></img>
                        </div>
                        <div className='texto-img'>
                            <h3>Gmail</h3>
                            <p>Próximamente</p>
                        </div>
                    </div>
                    <div className='rrss'>
                        <a href='https://www.instagram.com/andy.grciia' target='_blank' rel='noopener noreferrer' className='img-card'>
                            <img src={instagramRrss} alt='Gmail' />
                        </a>
                        <div className='texto-img'>
                            <h3>Instagram</h3>
                            <p>@andy.grciia</p>
                        </div>
                    </div>
                    <div className='rrss'>
                        <div className='img-card'>
                            <img src={discordRrss}></img>
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