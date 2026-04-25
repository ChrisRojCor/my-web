import '../stylesheets/Header.css';

function Header(){
    return(
        <div className='header'>
            <img className='icon' src={require('../img/css-3.png')} alt="Coding Icon" />
            <a className='link home-text' href="#home">Home</a>
            <a className='link skillset-text' href="#skillset">Skillset</a>
            <a className='link portfolio-text' href="#portfolio">Portfolio</a>
            <a className='link contact-text' href="">Contact</a>
        </div>
    );
}

export default Header;