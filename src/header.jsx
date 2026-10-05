import { useEffect, useState } from 'react'
import agujeroImg from './assets/header_img.png'
import ags_logo from './assets/ags_logo.png'
import bbddIcon from './assets/bbdd.svg'
import desarrolloIcon from './assets/desarrollo.svg'
import iaIcon from './assets/ia.svg'
import uiUxIcon from './assets/ui-ux.svg'
import './header.css'

function Header() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="hero-banner">

            {/* Pantalla de carga */}
            <div className={`hero-loader ${!loading ? 'hero-loader--hidden' : ''}`}>
                <img
                    src={ags_logo}
                    alt="AGS Software Engineering"
                    className="loader-logo"
                />

                <div className="loader-bar">
                    <div className="loader-bar-progress"></div>
                </div>
            </div>

            {/* Imagen de fondo */}
            <img
                className="hero-background"
                src={agujeroImg}
                alt=""
                aria-hidden="true"
            />

            {/* Logo */}
            <img
                className="hero-logo"
                src={ags_logo}
                alt="AGS Software Engineering"
            />

            {/* Navegación */}
            <nav className="header-bar">
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#tecnologias">Tecnologías</a>
                <a href="#contacto">Contacto</a>
            </nav>

            {/* Contenido principal */}
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

        </section>
    )
}

export default Header