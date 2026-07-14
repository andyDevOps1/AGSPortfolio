import { useState } from 'react'
import agujeroVid from './assets/agujero_negro.mp4'
import ags_logo from './assets/ags_logo.png'
import './header.css'

function Header (){
    return(
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
    );
}

export default Header;