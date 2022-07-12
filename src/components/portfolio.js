import { useEffect, useState } from 'react';
import './portfolio.scss';


//creating the portfolio component
const Portfolio = () => {

  const jsProjects = ['Weather Api', 'Drum', 'Dad Joke Api', 'Covid App Tracker'];
  const reactProjects = ['Portfolio'];
  const htmlProjects = [...jsProjects, ...reactProjects]; // the spread operator  

  const [shownProject, setShownProject] = useState([]);

  const resetProjects = () => { setShownProject([]) }

  return (
    <div className='porfolio'>
      <div className='projects-btn'>
        <button
          onMouseOver={() => setShownProject(jsProjects)}
          onMouseLeave={resetProjects}
        >Javascript</button>
        <button onMouseOver={() => setShownProject(htmlProjects)}
          onMouseLeave={resetProjects}
        >Html/CSS</button>
        <button onMouseOver={() => setShownProject(reactProjects)}
          onMouseLeave={resetProjects}>React</button>
      </div>
      <div className='projects'>

        {shownProject.map(project => <h2>{project}</h2>) /* the map function */}

      </div>
    </div>
  );
}

//export to be able to recall the function in other components
export default Portfolio;
