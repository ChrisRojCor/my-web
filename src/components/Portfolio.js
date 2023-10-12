import '../stylesheets/Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio-container' id='portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='portfolio-box'>
                <Project
                    title='1'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                />
                <Project
                    title='2'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                />
                <Project
                    title='3'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                />
            </div>
        </div>

    );
}

function Project({ title, description }) {
    return (
        <a className='project-link' href='' target='_blank'>
            <div className='project-box'>
                <h2 className='project-title'>{title}</h2>
                <img></img>
                <p className='project-description'>{description}</p>
            </div>
        </a>
    );
}

export default Portfolio;