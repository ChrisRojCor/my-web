import '../stylesheets/Header.css';

function Header(){
    return(
        <div className='header'>
            <h1 className="icon c">C</h1>
            <h1 className="icon r">R</h1>
            <a className='link home-text' href="#home">Home</a>
            <a className='link skillset-text' href="#skillset">Skillset</a>
            <a className='link portfolio-text' href="#portfolio">Portfolio</a>
            <a className='link contact-text' href="">Contact</a>
        </div>
    );
}

export default Header;