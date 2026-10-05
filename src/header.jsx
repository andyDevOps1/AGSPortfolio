import { useEffect, useState } from 'react'
import agujeroImg from './assets/header_img.png'
import ags_logo from './assets/ags_logo.png'
import bbddIcon from './assets/bbdd.svg'
import desarrolloIcon from './assets/desarrollo.svg'
import iaIcon from './assets/ia.svg'
import uiUxIcon from './assets/ui-ux.svg'
import './header.css'

function Header() {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [minimumTimePassed, setMinimumTimePassed] = useState(false)

    // La pantalla de carga dura como mínimo 3 segundos
    useEffect(() => {
        const timer = setTimeout(() => {
            setMinimumTimePassed(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    // Solo desaparece cuando han pasado 3s y el fondo está cargado
    const pageReady = minimumTimePassed && imageLoaded

    return (
        <section className="hero-banner">

            {/* Fondo */}
            <img
                className="hero-background"
                src={agujeroImg}
                alt=""
                aria-hidden="true"
                onLoad={() => setImageLoaded(true)}
            />

            {/* Logo */}
            <img
                src={ags_logo}
                alt="AGS Software Engineering"
                className="hero-logo"
            />

            {/* Navegación */}
            <nav className="header-bar">
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#tecnologias">Tecnologías</a>
                <a href="#contacto">Contacto</a>
            </nav>

            {/* Contenido */}
            <div className="hero-content">
                <h1>Andy García Sánchez</h1>
                <p>Ingeniería de Software</p>

                <div className="hero-tags">
                    <span>
                        <img src={bbddIcon} alt="" />
                        Bases de datos
                    </span>

                    <span>
                        <img src={desarrolloIcon} alt="" />
                        Web y nativo
                    </span>

                    <span>
                        <img src={iaIcon} alt="" />
                        IA
                    </span>

                    <span>
                        <img src={uiUxIcon} alt="" />
                        UI/UX
                    </span>
                </div>
            </div>

            {/* Pantalla de carga */}
            <div className={`hero-loader ${pageReady ? 'hero-loader--hidden' : ''}`}>
                <div className="loader-content">
                    <img
                        src={ags_logo}
                        alt=""
                        className="loader-logo"
                    />

                    <div className="loader-bar">
                        <div className="loader-bar-progress" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header