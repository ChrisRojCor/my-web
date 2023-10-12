import '../stylesheets/Social.css';

function Social(){
    return(
        <div className='social-container'>
            <a className='social-icon' href=''>
                <img className='icon-image' src={require('../img/linkedin.png')} alt='' />
            </a>
            <a className='social-icon' href=''>
                <img className='icon-image' src={require('../img/github.png')} alt='' />
            </a>
        </div>
    );
}

export default Social;