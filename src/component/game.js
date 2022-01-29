import React, { useState } from "react";
import questions from "./questions"; 
import {card,CardImg} from "react-bootstrap";
import Home from "./HomePage";
import Game2 from "./level2";

function Game() {
  const question = {

  }
  const [currentimage, setCurrentImage]=useState(0);
  const [items,setItems] = useState(questions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const purple="yellow";
  const [bg,setBg] = useState(purple);
  const [clicked,setClicked] =useState(false);
  const [answer,setAnswer] = useState('');
  const[isClick,setIsClick]=useState(false);
  const[isNextClick,setIsNextClick]=useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
      setTimeout(() => {
        if (isCorrect === true) {
          setScore(score + 1);
          setAnswer('right');
            
          
        }
        setClicked(true);
        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < 6) {
          setCurrentQuestion(nextQuetions);
        } 
        else {
          setShowScore(true);
        }
        const nextImage = currentimage + 1;
        if (nextImage < questions.length) {
          setCurrentImage(nextImage);
        }
      }, 300);
      if(score>=1){
        
      }
    
  };
  if(isClick){
    return <Home/>
  }
  if(isNextClick){
    return <Game2/>
  }
  return (
    <>
      <div className="container">
      {(showScore && score>=4) ? (
        <div className="final" style={{alignItems:"center"}}>
          <h1>congratulation</h1>
          <div>  
            
            You scored {score} out of 6
          </div>
         
          <div class="go_back_btn">
            <button class="go_back"
            onClick={()=>setIsClick(true)} >Go Back</button>
            
          </div>
          <button className='btn1'
          onClick={()=>setIsNextClick(true)}>next</button>
        </div>

    ) : (showScore && score<3)? (
      <div className="final" style={{alignItems:"center"}}>
          <div>  
            You scored {score} out of 6
          </div>
         
          <div class="go_back_btn">
            <button class="go_back"
            onClick={()=>setIsClick(true)} >Go Back</button>
          </div>
          
        </div>
    ) 
    :(
      <>
        <div >
        
        <div className="card" style={{width:'20rem'},{background:'green'},{padding:'20px'},{boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'},{borderRadius:"8px"}}>
          <img class="img-fluid" src={questions[currentimage].image} alt="web-course" width="320" height="160"/> 
          <p class="text-center">
            {questions[currentQuestion].questionText }

          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-6">
          {questions[currentQuestion].answerOptions.map((answerOptions) => (
          <button className="answer-button"
            onClick={() =>
              handleAnswerButtonClick(answerOptions.isCorrect)
            }
          >
          {answerOptions.answerText}
          </button>
          ))}
        </div>
        </div>
      </>
  )}  
    </div>
    </>
  )
}
export default Game;