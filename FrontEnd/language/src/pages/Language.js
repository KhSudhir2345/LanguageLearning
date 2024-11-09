import { useState } from 'react';
import './Language.css'
import Menubar from './Menubar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Language=()=>{
    const navigate=useNavigate();
    const languages=['hindi','telugu','spanish'];
    const [sidebaropen,setSidebarOpen]=useState(true);
    const handleClick=() =>{
        setSidebarOpen(!sidebaropen);
    }

    return (
        <div className="container">
          <div className="inner-container">
          {languages.map((language, index) => (
        <a 
        className={`gradient-card${index+1}`} 
        key={language} 
        href={`/languagequery?language=${language}`} 
        style={{ height: '100px', width: '100px' }}
        >
        {language}
        </a>
        ))}

            <div className="text-container">
              <img className="image" src="https://via.placeholder.com/209x206" alt="Placeholder" />
              <div className="header-text">
                Which Language do you want to learn ?
              </div>
            </div>
          </div>
          <div className="continue-text">
            Continue with your learnings....
          </div>
        <button onClick={handleClick} color='black'>close</button>
        {sidebaropen && <Menubar />}
        </div>
      );    

};
export default Language;