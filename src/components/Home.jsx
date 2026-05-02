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
                <div className='home-actions'>
                    <a className='download-cv' href={resume} download>Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default Home;