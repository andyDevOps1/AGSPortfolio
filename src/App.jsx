import { useState } from 'react'
import Tecnologias from './tecnologias'
import About from './about'
import Contacto from './contacto'
import Proyectos from './proyectos'
import Premios from './premios'
import Periodico from './periodico'
import Certificaciones from './certificaciones'
import Footer from './footer'
import agujeroVid from './assets/agujero_negro.mp4'
import ags_logo from './assets/ags_logo.png'
import './App.css'

function App() {
  return (
    <main className="page">
      <section className="hero-banner">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={agujeroVid} type="video/mp4" />
        </video>

        <img
          className="hero-logo"
          src={ags_logo}
          alt="AGS Software Engineering"
        />

        <div className="hero-content">
          <h1>Andy García Sánchez</h1>
          <p>Software Engineer</p>
        </div>
      </section>
      <About />
      <Tecnologias />
      <Proyectos />
      <Premios />
      <Periodico />
      <Certificaciones />
      <Contacto />
      <Footer />
    </main>
  );
}

export default App;