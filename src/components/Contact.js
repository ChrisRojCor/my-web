import '../stylesheets/Contact.css';

function Contact() {
    return(
        <div className='contact-container' id='contact'>
            <h1 className='contact-title'>Contact</h1>
            <form>
                <label htmlFor='name'>Name: </label>
                <input id='name'/>
            </form>
        </div>
    );
}

export default Contact;