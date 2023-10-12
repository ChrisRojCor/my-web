import '../stylesheets/Skillset.css';

function Skillset() {
    return (
        <div className='skillset' id='skillset'>
            <h1 className='skillset-title'>Skillset</h1>
            <div className='skillset-box'>
                <Skill
                    skillName='HTML'
                    image='html-5.png' />
                <Skill
                    skillName='CSS'
                    image='css-3.png' />
                <Skill
                    skillName='Javascript'
                    image='js.png' />
                <Skill
                    skillName='React'
                    image='react.png' />
                <Skill
                    skillName='Python'
                    image='python.png' />
                <Skill
                    skillName='Java'
                    image='java.png' />
                <Skill
                    skillName='Spring'
                    image='spring-boot.png' />
                <Skill
                    skillName='MySQL'
                    image='mysql.png' /> 
                                   

            </div>
        </div>
    );
}

function Skill({ skillName, image }) {
    return (
        <div className='skill'>
            <img className='skill-icon' src={require(`../img/${image}`)} alt='' />
            <h2 className='skill-subtitle' >{skillName}</h2>
        </div>
    );
}

export default Skillset;