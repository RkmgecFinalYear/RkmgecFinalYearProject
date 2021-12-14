// import "./index.css";
// import projects from "../image/projects.png";
// import images from '../image';
// import image from './images/web-course.jpg';
// import image from '../public/images/web-course.jpg';

import React, { Component, useState } from "react";
import questions from "./component/questions";
import {card,CardImg} from "react-bootstrap";
import { render } from "@testing-library/react";
import Game from "./component/game";
import Home from "./component/HomePage";
import { BrowserRouter,Route,Link } from "react-router-dom";
// import Game from "./component/game";
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

class App extends Component {
  render(){
    return(
      <Home/>
      // <BrowserRouter>
      // <Link to="/game">Start</Link>
      //   <Route path="/game" Component={Game}/>
      // </BrowserRouter>
    );
  }
}
export default App;
 /* <div className="grid grid-cols-2 gap-6 mt-6">
      <button className="bg-white p-4 text-purple-800">answer 1</button>
      <button className="bg-white p-4 text-purple-800">answer 2</button>
      <button className="bg-white p-4 text-purple-800">answer 3</button>
      <button className="bg-white p-4 text-purple-800">answer 4</button>
    </div> */