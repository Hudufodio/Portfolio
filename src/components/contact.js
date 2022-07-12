import './contact.scss';
import image from '../assets/map.png';

//creating the contact component
function Contact() {
    return (
        <div className='contact-details'>
            <p>
                Reach out for a responsive web<br />
                design and development.
            </p>
            <img src={image} />
            <br />
            <div className='address'>
                <span className='email'>
                    E-mail: example123@gmail.com
                </span>
                <br />
                <span className='fax'>
                    Fax: 9XX XXX XXX
                </span>
                <br />
                <span className='addree'>
                    Barcelona,Spain.
                </span>
            </div>
        </div>
    );
}

//export to be able to recall the function in other components
export default Contact;