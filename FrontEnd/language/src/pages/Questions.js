import { useState } from 'react';
import useFetch from '../useFetch.js';
import { useSearchParams } from 'react-router-dom';
import './Question.css';

const Questions = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get("language");
  const [level,setLevel] = useState(parseInt(searchParams.get("level"),10));

  const { error, isPending, data: quiz } = useFetch(`http://localhost:8000/quiz?language=${language}&level=${level}`);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isClosed, setIsClosed] = useState(true);

  const handleClose = () => {
    setIsClosed(false);
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else if(currentQuestionIndex>=quiz.quiz.questions.length-1){
        setLevel(level+1);
        setCurrentQuestionIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!quiz) return null;

  const currentQuestion = quiz.quiz.questions[currentQuestionIndex];

  return (
    <div className="container">
    <div style={{fontSize:'20px'}}>Level:{level+1}</div>
      <div className="question-box">
        <div className="question-text">
          {currentQuestion.english}
        </div>
      </div>
      {currentQuestion.options.map((option, index) => (
        <div key={index} className={`option-box option${index + 1}`}>
          {option}
        </div>
      ))}
      <div className="title">Grammar Guardian</div>
      <div className="next-button">
        <button className="button-text" onClick={handleNext}>Next</button>
      </div>
      <div className="previous-button">
        <button className="button-text" onClick={handlePrevious}>Previous</button>
      </div>
      <button onClick={handleClose}>Close</button>
      {isClosed && 
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="icon-group">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>
          <div className="icon-group">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="profile-icon">
              <div className="profile-status"></div>
            </div>
          </div>
        </div>
      </div>}
      <img className="small-icon" src="https://via.placeholder.com/30x30" alt="small icon" />
    </div>
  );
};

export default Questions;
