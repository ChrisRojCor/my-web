import '../stylesheets/Contact.css';

function Contact() {
    return (
        <section className='contact-section' id='contact'>
            <h1 className='contact-title'>¡Hablemos!</h1>
            <p className='contact-description'>
                Estoy disponible para proyectos de desarrollo web y consultoría administrativa.
            </p>
            <div className='contact-links-container'>
                {/* Enlace de Correo */}
                <a 
                    href='mailto:tu-correo@ejemplo.com' 
                    className='contact-link email'
                >
                    <img src={require('../img/gmail.png')} alt="Email" />
                </a>
                {/* Enlace de LinkedIn */}
                <a 
                    href='https://www.linkedin.com/in/tu-perfil' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-link linkedin'
                >
                    <img src={require('../img/linkedin.png')} alt="LinkedIn" />
                </a>
                {/* Enlace de GitHub */}
                <a 
                    href='https://github.com/tu-usuario' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-link github'
                >
                    <img src={require('../img/github.png')} alt="GitHub" />
                </a>
            </div>
        </section>
    );
}

export default Contact;