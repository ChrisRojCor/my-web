import { useState } from 'react';
import '../stylesheets/Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <img className='icon' src={require('../img/css-3.png')} alt="Coding Icon" />
            
            <div className='nav-links'>
                <a className='link hero-text' href="#hero">Home</a>
                <a className='link skillset-text' href="#skillset">Skillset</a>
                <a className='link experience-text' href="#experience">Experience</a>
                <a className='link portfolio-text' href="#portfolio">Portfolio</a>
                <a className='link education-text' href="#education">Education</a>
                <a className='link contact-text' href="#contact">Contact</a>
            </div>

            <div className='nav-hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className='nav-menu'>
                <a className='link hero-text' href="#hero" onClick={closeMenu}>Home</a>
                <a className='link skillset-text' href="#skillset" onClick={closeMenu}>Skillset</a>
                <a className='link experience-text' href="#experience" onClick={closeMenu}>Experience</a>
                <a className='link portfolio-text' href="#portfolio" onClick={closeMenu}>Portfolio</a>
                <a className='link education-text' href="#education" onClick={closeMenu}>Education</a>
                <a className='link contact-text' href="#contact" onClick={closeMenu}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
