import { useState } from 'react'
import Header from './header'
import Tecnologias from './tecnologias'
import About from './about'
import Contacto from './contacto'
import Proyectos from './proyectos'
import Premios from './premios'
import Periodico from './periodico'
import Certificaciones from './certificaciones'
import Footer from './footer'
import './App.css'

function App() {
  return (
    <main className="page">
      <Header />
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