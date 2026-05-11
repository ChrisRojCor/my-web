import './Social.css';

function Social() {
    return (
        <section className='social-container'>
            <div className='icon-group'>
                <a className='social-icon' href=''>
                    <img className='icon-image' src={require('../../assets/icons/linkedin-hero.png')} alt='' />
                </a>
                <a className='social-icon' href=''>
                    <img className='icon-image' src={require('../../assets/icons/github.png')} alt='' />
                </a>
            </div>
        </section>
    );
}

export default Social;
