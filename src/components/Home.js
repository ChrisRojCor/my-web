import '../stylesheets/Home.css';
import resume from '../docs/resume.pdf'

function Home() {
    return (
        <section className='home-section' id='home'>
            <div className='home-content'>
                <h1 className='my-name'>
                    I'm <span className='name-color'>Cristian</span> Rojas
                </h1>
                <p className='introduction'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='home-actions'>
                    <a className='download-cv' href={resume} download>Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default Home;