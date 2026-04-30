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
                    <span className="link-text">Enviar un correo</span>
                </a>
                {/* Enlace de LinkedIn */}
                <a 
                    href='https://www.linkedin.com/in/tu-perfil' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-link linkedin'
                >
                    <span className="link-text">LinkedIn</span>
                </a>
                {/* Enlace de GitHub */}
                <a 
                    href='https://github.com/tu-usuario' 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='contact-link github'
                >
                    <span className="link-text">GitHub</span>
                </a>
            </div>
        </section>
    );
}

export default Contact;