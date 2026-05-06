import '../stylesheets/Skillset.css';

function Skillset() {
    return (
        <section className='skillset-section' id='skillset'>
            <h1 className='skillset-title'>Skillset</h1>
            <div className='skillset-box'>
                <CategoryCard
                    title='Frontend'
                    items={['HTML', 'CSS', 'JavaScript', 'React']}
                />
                <CategoryCard
                    title='Backend'
                    items={['Python', 'Java', 'Spring Boot', 'MySQL']}
                />
                <CategoryCard
                    title='Tools'
                    items={['Git', 'Docker', 'VS Code', 'Postman']}
                />
                <CategoryCard
                    title='Product & Quality'
                    items={['Agile/Scrum', 'Testing', 'CI/CD', 'Code Review']}
                />
            </div>
        </section>
    );
}

function CategoryCard({ title, items }) {
    return (
        <div className='category-card'>
            <div className='category-header'>
                <h2 className='category-title'>{title}</h2>
            </div>
            <ul className='category-list'>
                {items.map((item, index) => (
                    <li key={index} className='category-item'>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Skillset;
