import './Education.css';
import educationData from '../../data/education.js';

function Education() {
    return (
        <section className='education-section' id='education'>
            <h1 className='education-title'>Education</h1>
            <div className='education-box'>
                {educationData.map((edu, index) => (
                    <EducationCard key={index} {...edu} />
                ))}
            </div>
        </section>
    );
}

function EducationCard({ degree, institution, dates }) {
    return (
        <div className='edu-card'>
            <div className='edu-header'>
                <h2 className='edu-degree'>{degree}</h2>
            </div>
            <div className='edu-subheader'>
                <p className='edu-institution'>{institution}</p>
                <span className='edu-dates'>{dates}</span>
            </div>
        </div>
    );
}

export default Education;
