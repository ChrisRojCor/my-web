import '../stylesheets/Experience.css';

function Experience() {
    return (
        <section className='experience-section' id='experience'>
            <h1 className='experience-title'>Experience</h1>
            <div className='experience-box'>
                <ExperienceCard
                    role='Role Title'
                    tag='Tag'
                    company='Company Name'
                    dates='Jan 2024 - Present'
                    description='Description of activities performed in this role. Details about responsibilities and achievements.'
                />
                <ExperienceCard
                    role='Previous Role'
                    tag='Tag'
                    company='Previous Company'
                    dates='Jan 2022 - Dec 2023'
                    description='Description of activities performed in this previous role. Details about responsibilities and achievements.'
                />
                <ExperienceCard
                    role='Earlier Role'
                    tag='Tag'
                    company='Earlier Company'
                    dates='Jan 2020 - Dec 2021'
                    description='Description of activities performed in this earlier role. Details about responsibilities and achievements.'
                />
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
