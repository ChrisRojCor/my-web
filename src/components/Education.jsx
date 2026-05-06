import '../stylesheets/Education.css';

function Education() {
    return (
        <section className='education-section' id='education'>
            <h1 className='education-title'>Education</h1>
            <div className='education-box'>
                <EducationCard
                    degree='Degree Name'
                    institution='Institution Name'
                    dates='Jan 2020 - Dec 2024'
                />
                <EducationCard
                    degree='Previous Degree'
                    institution='Previous Institution'
                    dates='Jan 2016 - Dec 2020'
                />
                <EducationCard
                    degree='Earlier Degree'
                    institution='Earlier Institution'
                    dates='Jan 2012 - Dec 2016'
                />
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
