import './Skillset.css';
import skillsData from '../../data/skills.js';

function Skillset() {
    return (
        <section className='skillset-section' id='skillset'>
            <h1 className='skillset-title'>Skillset</h1>
            <div className='skillset-box'>
                {skillsData.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
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
