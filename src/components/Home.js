import '../stylesheets/Home.css';
import resume from '../docs/resume.pdf'

function Home(){
    return(
        <div className='home-container' id='home'>
            <h1 className='my-name'>
                I'm <span className='name-color'>Cristian</span> Rojas
            </h1>
            <p className='introduction'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <a className='download-cv' href={resume} download>Download CV</a>
        </div>
    );
}

export default Home;