import '../stylesheets/Social.css';

function Social() {
    return (
        <section className='social-container'>
            <div className='icon-group'>
                <a className='social-icon' href=''>
                    <img className='icon-image' src={require('../img/linkedin.png')} alt='' />
                </a>
                <a className='social-icon' href=''>
                    <img className='icon-image' src={require('../img/github.png')} alt='' />
                </a>
            </div>
        </section>
    );
}

export default Social;