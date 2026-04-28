import '../stylesheets/Navbar.css';

import '../stylesheets/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <img className='icon' src={require('../img/css-3.png')} alt="Coding Icon" />
            <div className='nav-links'>
                <a className='link home-text' href="#home">Home</a>
                <a className='link skillset-text' href="#skillset">Skillset</a>
                <a className='link portfolio-text' href="#portfolio">Portfolio</a>
                <a className='link contact-text' href="#contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
