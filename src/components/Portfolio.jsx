import '../stylesheets/Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio-section' id='portfolio'>
            <h1 className='portfolio-title'>Portfolio</h1>
            <div className='portfolio-box'>
                <Project
                    title='1'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    tags={['API', 'CSS', 'React']}
                />
                <Project
                    title='2'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    tags={['API', 'CSS', 'React']}
                />
                <Project
                    title='3'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                    tags={['API', 'CSS', 'React']}
                />                
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