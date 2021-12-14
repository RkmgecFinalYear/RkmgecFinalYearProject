// import "./index.css";
// import projects from "../image/projects.png";
// import images from '../image';
// import image from './images/web-course.jpg';
// import image from '../public/images/web-course.jpg';

import React, { useState } from "react";
import questions from "./questions"; 
import {card,CardImg} from "react-bootstrap";
import Home from "./HomePage";
// import ig from "./images/python-course.jp";
// const App=()=>{
  
//   const [items,setItems] = useState(questions);
//   const [currentimage, setCurrentImage]=useState(0);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [score, setScore] = useState(0);
//   const handleAnswerButtonClick = (isCorrect) => {
//     if (isCorrect === true) {
//       setScore(score + 1);
//     }

//     const nextQuetions = currentQuestion + 1;
//     if (nextQuetions < questions.length) {
//       setCurrentQuestion(nextQuetions);
//     } else {
//       setShowScore(true);
//     }
//     const nextImage = currentimage + 1;
//     if (nextImage < questions.length) {
//       setCurrentImage(nextImage);
//     }
//   };

//   return (
//     <>
      
//       <h1 className="header">Quiz</h1>
//       <div>
        
//         {/* <img src={image} alt="web-course" /> */}
        
//       </div>
//       <div className="app">
//         {showScore ? (
//           <div className="score-section">
//             You scored {score} out of {questions.length}
//           </div>
//         ) : (
//           <>
//             <div className="question-section">
//               <div className="question-count">
//                 <span>Question {currentQuestion + 1}</span>
//                 {questions.length}
//               </div>
//               <div className="col-12 col-md-5 m-1">
//                 {/* {
//                   items.map((elem) => {
//                     const {image,questionText,answerOptions} = elem;
                    
//                   })
//                 } */}
//                 {questions[currentimage].image}
//                 {questions[currentQuestion].questionText }
//               </div>
//             </div>

//             <div className="answer-section">
//               {questions[currentQuestion].answerOptions.map((answerOptions) => (
//                 <button
//                   onClick={() =>
//                     handleAnswerButtonClick(answerOptions.isCorrect)
//                   }
//                 >
//                   {answerOptions.answerText}
//                 </button>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import {Button} from "react-bootstrap";
// import "./index.css";

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

  const handleAnswerButtonClick = (isCorrect) => {
      setTimeout(() => {
        if (isCorrect === true) {
          setScore(score + 1);
          setAnswer('right');
            
          
        }
        setClicked(true);
        const nextQuetions = currentQuestion + 1;
        if (nextQuetions < questions.length) {
          setCurrentQuestion(nextQuetions);
          // let newBg='red';
          // setBg(newBg);
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
  return (
    <>
      <div className="container">
      {showScore ? (
        <div className="final" style={{alignItems:"center"}}>
          <div>  
            You scored {score} out of {questions.length}
          </div>
         
          <div class="go_back_btn">
            <button class="go_back"
            onClick={()=>setIsClick(true)} >Go Back</button>
          </div>
        </div>

    ) : (
      <>
        <div >
        
        <div className="card" style={{width:'20rem'},{background:'green'},{padding:'20px'},{boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'},{borderRadius:"8px"}}>
          <img class="img-fluid" src={questions[currentimage].image} alt="web-course" width="320" height="160"/> 
          {/* {questions[currentimage].image} */}
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
            
            // style={
            //   answerOptions.isCorrect ?
            //     styleForCorrectAnswer:
            //   !isCorrect ?
            //     styleForWrongAnswer:
            //   styleForCorrectAnswer
            // }
          >
          {answerOptions.answerText}
          </button>
          ))}
          {/* <button className="btn btn-outline-success">ashbn;kl fds</button> */}
        </div>
        </div>
      </>
    
        
   
  )}  
    </div>
    </>
  )
}
export default Game;
 /* <div className="grid grid-cols-2 gap-6 mt-6">
      <button className="bg-white p-4 text-purple-800">answer 1</button>
      <button className="bg-white p-4 text-purple-800">answer 2</button>
      <button className="bg-white p-4 text-purple-800">answer 3</button>
      <button className="bg-white p-4 text-purple-800">answer 4</button>
    </div> */