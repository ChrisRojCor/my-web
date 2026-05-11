import './Experience.css';
import experienceData from '../../data/experience.js';

function Experience() {
    return (
        <section className='experience-section' id='experience'>
            <h1 className='experience-title'>Experience</h1>
            <div className='experience-box'>
                {experienceData.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </section>
    );
}

function ExperienceCard({ role, tag, company, dates, description }) {
    return (
        <div className='exp-card'>
            <div className='exp-header'>
                <span className='exp-tag'>{tag}</span>
                <h2 className='exp-role'>{role}</h2>
            </div>
            <div className='exp-subheader'>
                <p className='exp-company'>{company}</p>
                <span className='exp-dates'>{dates}</span>
            </div>
            <p className='exp-description'>{description}</p>
        </div>
    );
}

export default Experience;
