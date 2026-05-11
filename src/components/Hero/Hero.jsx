import './Hero.css';
import resume from '../../assets/docs/resume.pdf'
import fileIcon from '../../assets/icons/file.png';
import linkedinIcon from '../../assets/icons/linkedin-hero.png';
import githubIcon from '../../assets/icons/github.png';

function Hero() {
    return (
        <section className='hero-section' id='hero'>
            <div className='hero-content'>
                <h1 className='my-name'>
                    Hi! I'm <span className='name-color'>Cristian</span> Rojas
                </h1>
                <h2>
                    Software Engineer - Full-Stack Developer
                </h2>
                <p>
                    I'm a software engineer with a foundation in full-stack development and a keen eye for quality, process, and detail.
                    I take pride in building reliable, well-structured applications — and in bridging the gap between technical teams and business needs.
                    My background spans Java, Python, and JavaScript, and I'm equally comfortable working on backend logic, REST API integrations, and React-based frontends.

                </p>
                <p>
                    I'm currently completing my Software Engineering degree (expected 2027), and my path here has been shaped by more than just code.
                </p>
                <p>
                    Previously, I spent several years in quality management and business administration, where I developed a rigorous, process-oriented mindset — skills that now directly inform how I approach software architecture, requirement validation, and stakeholder communication.
                </p>
                <p>
                    I do my best work at the intersection of engineering and product thinking, where technical precision meets real-world usability. I'm driven by building things that are both well-crafted and genuinely useful.
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
