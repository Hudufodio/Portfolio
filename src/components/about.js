import './about.scss';
import image from '../assets/figma.png';

//creating the about component
const About = () => {
    return (
        <div className='about'>
            <p className='about-text'>
                I`m Hudu, a novice website/mobile
                app developer. I design, develop
                and maintain websites for busineses
                and persons as well.
                visit my github for more work samples.
            </p>
            <div>
                <img src={image} />
            </div>
        </div>
    );
}

//export to be able to reuse function in other components
export default About;