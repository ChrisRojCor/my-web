import './Portfolio.css';
import projectsData from '../../data/projects.js';

function Portfolio() {
    return (
        <section className='portfolio-section' id='portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='portfolio-box'>
                {projectsData.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>

    );
}

function Project({ title, description, tags =[]}) {
    return (
        <a className='project-link' href='' target='_blank'>
            <div className='project-box'>
                <h2 className='project-title'>{title}</h2>
                <img></img>
                <p className='project-description'>{description}</p>
                <div className='project-tags'>
                    {tags?.map((t, index) => (
                        <span key={index} className='tag'>{t}</span>
                    ))}
                </div>
            </div>
        </a>
    );
}

export default Portfolio;
