import { useState } from 'react';
import './footer.css';

const fechaActual = new Date();
const year = fechaActual.getFullYear();

function Footer() {
    return (
        <footer>
            <p>&copy; {year}. Andy García Sánchez.</p>
        </footer>
    );
}

export default Footer;