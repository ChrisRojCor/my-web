import './Contact.css';

function Contact() {
    return (
        <section className='contact-section' id='contact'>
            <h1 className='contact-title'>¡Hablemos!</h1>
            <p className='contact-description'>
                Estoy disponible para proyectos de desarrollo web y consultoría administrativa.
            </p>
            <div className='contact-links-container'>
                <a 
                    href='mailto:tu-correo@ejemplo.com' 
                    className='contact-link email'
                >
                    <img src={require('../../assets/icons/gmail.png')} alt="Email" />
                </a>
                <a 
                    href='https://www.linkedin.com/in/tu-perfil' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-link linkedin'
                >
                    <img src={require('../../assets/icons/linkedin.png')} alt="LinkedIn" />
                </a>
                <a 
                    href='https://github.com/tu-usuario' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-link github'
                >
                    <img src={require('../../assets/icons/github.png')} alt="GitHub" />
                </a>
            </div>
        </section>
    );
}

export default Contact;
