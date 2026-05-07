import '../stylesheets/Hero.css';
import resume from '../docs/resume.pdf'
import fileIcon from '../img/file.png';
import linkedinIcon from '../img/linkedin-hero.png';
import githubIcon from '../img/github.png';

function Hero() {
    return (
        <section className='hero-section' id='hero'>
            <div className='hero-content'>
                <h1 className='my-name'>
                    I'm <span className='name-color'>Cristian</span> Rojas
                </h1>
                <p className='introduction'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Vestibulum vel efficitur ante. Donec at est ut ex congue facilisis. 
                     Suspendisse potenti. Nullam id ex nec mi tristique interdum. 
                     Aliquam id elementum magna. Maecenas a pulvinar urna, non elementum dui. 
                     Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                     In hac habitasse platea dictumst. Curabitur sed lectus sed diam sodales scelerisque. 
                     Vivamus sit amet eleifend neque. 
                     Fusce vitae nisl a enim facilisis interdum. 
                     Cras vel scelerisque tellus. Etiam accumsan felis nec varius rhoncus. 
                     Mauris sed convallis quam. Praesent auctor porttitor varius. 
                     Quisque efficitur lorem eget nisi sodales, non scelerisque lectus tincidunt. 
                     Nam ut luctus leo. Sed at mi nec libero varius varius. Duis at odio non nisi consequat dictum. 
                     Quisque eget elit porta, pulvinar purus vitae, finibus tortor. 
                     Proin pretium porta erat, a convallis urna gravida eu. 
                     Ut varius, nulla at dictum varius, velit mi finibus ante, eu molestie nunc ipsum vitae dolor. 
                     Nulla facilisi phasellus.
                </p>
                <div className='hero-actions'>
                    <a className='social-btn linkedin' href='https://www.linkedin.com/in/tu-perfil' target='_blank' rel='noopener noreferrer'>
                        <img src={linkedinIcon} alt="LinkedIn" className="btn-icon" />
                        LinkedIn
                    </a>
                    <a className='social-btn github' href='https://github.com/tu-usuario' target='_blank' rel='noopener noreferrer'>
                        <img src={githubIcon} alt="GitHub" className="btn-icon" />
                        GitHub
                    </a>
                    <a className='download-cv' href={resume} download>
                        <img src={fileIcon} alt="" className="btn-icon" />
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
