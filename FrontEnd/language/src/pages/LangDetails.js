import { useNavigate } from 'react-router-dom';
import './LangDetails.css'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const LangDetails=() => {
    const [searchParams]=useSearchParams();
    const language=searchParams.get("language");
    const navigate=useNavigate();
    const [progress,setProgress]=useState(0);
    const [closed,setIsClosed]=useState(true);
    const handleQuestions=() =>{
        navigate(`/question?language=${language}&level=${progress}`);
    }
    const user=JSON.parse(localStorage.getItem('user'));
    if(user){
        setProgress(user.progress);

    }
    const handleClose=() => {
        setIsClosed(!closed);
    }
    return (
        <div className="container">
          <div className="score-section">
            <div className="score-circle"></div>
            <div className="score-line" style={{ top: '98px' }}></div>
            <div className="score-line" style={{ top: '169px' }}></div>
            <div className="score-line" style={{ top: '260px' }}></div>
            <div className="score-text" style={{ top: '59px' }}>Total Score :</div>
            <div className="score-text" style={{ top: '212px' }}>Status :(Master..)</div>
            <div className="score-text" style={{ top: '130px' }}>Remaining levels :</div>
            <div className="score-number">69</div>
          </div>
    
          <div className="progress-section">
            <div className="title">Grammar Guardian</div>
            <div className="bonus">Completion Bonus : 1600</div>
            <div className="penalty">
              <span>Penalty Score: 100 </span>
              <span>(for each fail)</span>
            </div>
            <button className="progress-border" onClick={handleQuestions} color='white'>

            </button>
            <div className="progress-label">Progress :</div>
          </div>
    
          <div className="current-level">Current Level</div>
    
          <div className="button next-button">
            <div>Next</div>
          </div>
    
          <img
            className="icon"
            src="https://via.placeholder.com/30x30"
            alt="icon"
          />
            <button onClick={handleClose}>Close</button>
            {closed &&
           <div className="sidebar">
            <div className="sidebar-item"></div>
            <div className="sidebar-item"></div>
            <div className="sidebar-item"></div>
          </div>
            }
    
          <div className="button prev-button">
            <div>Previous</div>
          </div>
        </div> 
      );
};

export default LangDetails;