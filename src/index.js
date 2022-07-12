//import imgs from the assets folder
import logo from './assets/logo.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import email from './assets/email.png';
import image from './assets/home.png';

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';

//creating a home component
const Home = () => {

  // use the state function to toggle between pages
  const [currentPage, setCurrentPage] = useState('');

  return (
    <>
      <header>
        <div className='logo'>
          <img src={logo} onClick={() => setCurrentPage('')} />
        </div>
        <nav className='nav'>
          <button onClick={() => setCurrentPage('portfolio')}>Portfolio</button>
          <button onClick={() => setCurrentPage('about')}>About</button>
          <button onClick={() => setCurrentPage('contact')}>Contact</button>
        </nav>
      </header>
      <div className='content'>
        {currentPage === '' && <div className='home'>Hudu Fodio
          <img src={image} />
          <div className='text'>Web Design <br /> <br />Web Development<br /><br />Web Maintenance<br /></div>
        </div>}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </div>
      <footer>
        <img src={linkedin} width='70px' height='60px' />
        <img src={github} width='70px' height='60px' />
        <img src={email} width='70px' height='60px' />
        <span>(C) 2022</span>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
