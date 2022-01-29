import React, {useState} from 'react';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Game from './game';

function Home() {
    const[isClick,setIsClick]=useState(false);
    const purple="red";
    const[show,setShow] =useState(false);
    if(isClick){
        return <Game/>
    }
  return (  
      <div>
          
          <button className='start_button'
            onClick={()=>setIsClick(true)}>
              start
          </button>
          <br/>
          
          <button className='btn1' onClick={()=>setShow(!show)}>Rules</button>
          {
            show?<div class='rules'>
              <li>Press the start button to start the game</li>
              <li>There are six questions in each round</li>
              <li>If you score more than equal to 5 you will progressed to the next round</li>
              <li>In other cases you can restart the game</li>
            </div>:null
          }  
      </div>                   
  );
}
export default Home;