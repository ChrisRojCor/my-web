import '../stylesheets/Navbar.css';

function Navbar(){
    return(
        <div className='navbar'>
            <img className='icon' src={require('../img/css-3.png')} alt="Coding Icon" />
            <a className='link home-text' href="#home">Home</a>
            <a className='link skillset-text' href="#skillset">Skillset</a>
            <a className='link portfolio-text' href="#portfolio">Portfolio</a>
            <a className='link contact-text' href="">Contact</a>
        </div>
    );
}

export default Navbar;
